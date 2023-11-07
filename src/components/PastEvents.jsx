import React from "react";
import styled from "styled-components";
import Poster from "../assets/hack4mini.jpg"

const PastEvents = () => {
  return (
    <EventsPast>
      <img src={Poster} alt="" />
      <h2>Event Name</h2>
      <p>Event Description</p>
      <p>Event Date</p>
    </EventsPast>
  );
};

export default PastEvents;


const EventsPast = styled.div`
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
`;
