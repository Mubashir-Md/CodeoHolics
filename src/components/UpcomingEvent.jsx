import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../firebase";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Delete, DeleteIcon, Trash } from "lucide-react";

const UpcomingEvents = ({ upcomingEvents, setUpcomingEvents }) => {
  const nav = useNavigate();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [user, setUser] = useState("");

  const gotoForm = (eventName) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        const userDetails = {
          userName: data.user.displayName || "Anonymous",
          email: data.user.email,
        }
        nav(`/events/register/${eventName}`,{state: {userDetails}} );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const gotoDetails = (eventName) => {
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

  const deleteEvent = async (eventId) => {
    const docRef = doc(db, "events", eventId);
    await deleteDoc(docRef);
    setUpcomingEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  return (
    <EventsWrapper>
      {upcomingEvents.map((event) => (
        <EventsUpcoming key={event.id} isDarkMode={isDarkMode}>
          <img src={event.eventPoster} alt="" />
          <div className="details">
            <h2>{event.eventName}</h2>
            <p>{event.eventDescription}</p>
            <p>{event.eventDate}</p>
            <Buttons>
              <button onClick={() => gotoForm(event.eventName)} target="_blank">
                Register Here
              </button>
              <button
                onClick={() => gotoDetails(event.eventName)}
                target="_blank"
              >
                Event Details
              </button>
              <Trash onClick={() => deleteEvent(event.id)} />
            </Buttons>
          </div>
        </EventsUpcoming>
      ))}
    </EventsWrapper>
  );
};

export default UpcomingEvents;

const EventsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EventsUpcoming = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: ${({ isDarkMode }) =>
    isDarkMode ? "2px solid #fff" : "2px solid #000"}; */
  margin: 10px;
  /* padding: 10px; */
  border-radius: 25px;
  box-shadow: ${({ isDarkMode }) =>
    isDarkMode
      ? "0 31.3944px 33.0467px #243538, inset 0 -4.95701px 16.5233px rgb(188 188 188 / 40%)"
      : "0 31.3944px 33.0467px #ECFCFF, inset 0 -4.95701px 16.5233px rgb(188 188 188 / 40%)"};

  img {
    width: 100%;
    height: auto;
    max-height: 350px;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
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
  svg {
    color: red;
    cursor: pointer;
  }
`;
