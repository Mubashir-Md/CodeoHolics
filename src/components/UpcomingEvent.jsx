import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth, db, provider } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const UpcomingEvents = () => {
  const nav = useNavigate();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [user, setUser] = useState("");
  const [upcomingEvents, setUpcomingEvents] = useState([]);


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsCollection = collection(db, "events");
        const querySnapshot = await getDocs(eventsCollection);
        const eventsData = [];
        querySnapshot.forEach((doc) => {
          eventsData.push({ id: doc.id, ...doc.data() });
        });
        console.log(eventsData);
        setUpcomingEvents(eventsData);
      } catch (error) {
        console.error("Error fetching past events: ", error);
      }
    };
    fetchEvents();
  }, []);

  const gotoForm = (eventName) => {
    const event = eventName;
    nav(`/events/register/${event}`);
  };

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
  border: ${({isDarkMode}) => isDarkMode ? "2px solid #fff" : "2px solid #000"};
  margin: 10px;
  padding: 10px;
  border-radius: 10px;

  img {
    width: 15em;
    height: 15em;
    border-radius: 5px;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: ${({isDarkMode}) => isDarkMode ? "#fff" : "#000"};
    color: ${({isDarkMode}) => isDarkMode ? "#000" : "#fff"};
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
    color: ${({isDarkMode}) => isDarkMode ? "#fff" : "#000"};
  }
  .details > *{
    margin: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
