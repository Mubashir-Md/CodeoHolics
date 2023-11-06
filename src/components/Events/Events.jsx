import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import OngoingEvents from "./OngoingEvents";
import PastEvents from "./PastEvents";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import UpcomingEvents from "./UpcomingEvent";

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
  );
};

export default Events;

const EventsPage = styled.div`
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
