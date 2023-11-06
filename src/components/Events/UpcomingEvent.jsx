import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Poster from "../../assets/Hack4mini.jpeg";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

const UpcomingEvents = () => {
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

  return (
    <EventsWrapper>
      {upcomingEvents.map((event) => (
        <EventsUpcoming key={event.id}>
          <img src={event.eventPoster} alt="" />
          <h2>{event.eventName}</h2>
          <p>{event.eventDescription}</p>
          <p>{event.eventDate}</p>
          <a href={event.eventLink} target="_blank">Register Here</a>
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
  border: 2px solid #000;
  margin: 10px;
  border-radius: 10px;

  img {
    width: 15em;
    height: 50%;
    border-radius: 5px;
  }
  a{
    text-decoration: none;
    color: #fff;
    background-color: #000;
    margin: 10px;
    padding: 5px 10px; 
    width: 10em;
    text-align: center;
    border-radius: 5px;
    font-size: 1.2em;
  }
`;
