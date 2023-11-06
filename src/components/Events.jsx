import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PastEvents from "./PastEvents";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import UpcomingEvents from "./UpcomingEvent";
import NavBar from "./NavBar";
import Event from "../../assets/events.jpg";

const Events = () => {
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));

        const user = data.user;
        const userEmail = user.email;
        if (userEmail === "mdmubashirahmed12345@gmail.com") {
          nav("/hostevent");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  };
  return (
    <Wrapper>
      <Card>
        <NavBar />
        <EventsPage>
          {/* <OngoingEvents /> */}
          <button className="google" onClick={handleSignIn}>
            Host an Event
          </button>
          <h1>Upcoming Events</h1>
          <Upcoming>
            <UpcomingEvents />
          </Upcoming>
          <h1>Past Events</h1>
          <Past>
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
            <PastEvents />
          </Past>
        </EventsPage>
      </Card>
    </Wrapper>
  );
};

export default Events;

const Wrapper = styled.div`
  background-image: url(${Event});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Card = styled.div`
  backdrop-filter: blur(12px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
  overflow: auto;
`;

const EventsPage = styled.div`
  margin: 10px;
  padding: 10px;
  button.google {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: #fff;
    cursor: pointer;
  }
`;

const Upcoming = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Past = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
