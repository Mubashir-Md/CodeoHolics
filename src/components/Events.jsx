import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PastEvents from "./PastEvents";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import UpcomingEvents from "./UpcomingEvent";
import NavBar from "./NavBar";
import Event from "../assets/events.jpg";
import { BiSolidLockAlt } from "react-icons/bi";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const Events = () => {
  const nav = useNavigate();
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);
  const [user, setUser] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));

        const user = data.user;
        const userEmail = user.email;
        if (userEmail === "mdmubashirahmed12345@gmail.com") {
          nav("/events/hostevent");
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
      <Card isDarkMode={isDarkMode}>
        <NavBar />
        <EventsPage isDarkMode={isDarkMode}>
          {/* <OngoingEvents /> */}
          <button className="google" onClick={handleSignIn}>
            Host an Event <BiSolidLockAlt/>
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
  background-color: ${({isDarkMode})=> isDarkMode ? "rgba(0,0,0,0.78)" : "rgba(255, 255, 255, 0.78)"};
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
  overflow: auto;
`;

const EventsPage = styled.div`
  margin: 10px;
  padding: 10px;
  button.google {
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 10px;
    border: ${({ isDarkMode }) => isDarkMode ? "2px solid #fff" : "2px solid #000"};
    background: transparent;
    color: ${({ isDarkMode }) => isDarkMode ? "#fff" : "#000"};
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin: 10px;
    }
  }

  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 2.5rem;
    color: ${({ isDarkMode }) => isDarkMode ? "#fff" : "#000"};
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
