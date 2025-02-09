import React, { useContext, useState } from "react";
import styled from "styled-components";
import Poster from "../assets/hack4mini.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const PastEvents = ({ pastEvents }) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const gotoDetails = (eventName) => {
    const event = eventName;
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));

        const user = data.user;
        const userEmail = user.email;
        if (userEmail === "mdmubashirahmed12345@gmail.com") {
          nav(`/events/event-details/${eventName}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <EventsWrapper>
      {pastEvents.map((event) => (
        <EventsPast key={event.id} isDarkMode={isDarkMode}>
          <img src={event.eventPoster} alt="" />
          <div className="details">
            <h2>{event.eventName}</h2>
            <p>{event.eventDescription}</p>
            <p>{event.eventDate}</p>
            <Buttons>
              <button
                onClick={() => gotoDetails(event.eventName)}
                target="_blank"
              >
                Event Details
              </button>
            </Buttons>
          </div>
        </EventsPast>
      ))}
    </EventsWrapper>
  );
};

export default PastEvents;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EventsPast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: ${({ isDarkMode }) =>
    isDarkMode ? "2px solid #fff" : "2px solid #000"};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;

  img {
    max-width: 350px;
    max-height: 350px;
    border-radius: 5px;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
    color: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
    border: none;
    cursor: pointer;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    margin: 10px;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  }
  .details > * {
    margin: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
