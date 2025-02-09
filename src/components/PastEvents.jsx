import React, { useContext, useState } from "react";
import styled from "styled-components";
import Poster from "../assets/hack4mini.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Trash } from "lucide-react";
import { deleteDoc, doc } from "firebase/firestore";

const PastEvents = ({ pastEvents, setPastEvents }) => {
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
  const deleteEvent = async (eventId)=>{
    const docRef = doc(db, "events", eventId);
    await deleteDoc(docRef);
    setPastEvents((prev)=>prev.filter((event)=>event.id !== eventId))
  }
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
              <Trash onClick={()=>deleteEvent(event.id)} />
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
  margin: 10px;
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
  svg{
    color: red;
    cursor: pointer;
  }
`;
