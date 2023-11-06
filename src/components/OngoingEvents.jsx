import React from "react";
import styled from "styled-components";
import Poster from "../../assets/Hack4mini.jpeg";

const OngoingEvents = () => {
  return (
    <EventOngoing>
      <h1>Event Ongoing</h1>
      <div className="event">
        <div className="details">
          <h2>HACK-4-MINI</h2>
          <p>
            Join the Ultimate Inter-College Online Coding Contest! 🚀 Are you
            ready to put your coding skills to the test and showcase your talent
            on a grand stage? Look no further! We're excited to invite you to
            the most thrilling online coding competition!
          </p>

          <p>Date: 5th and 6th November 2023</p>

          <a href="https://forms.gle/p6MBFnicyV9VAXkP7" target="_blank">Register Here</a>
        </div>
        <img src={Poster} alt="" />
      </div>
    </EventOngoing>
  );
};

export default OngoingEvents;

const EventOngoing = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;

  div.event {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div.details {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 10px;

      h2 {
        font-size: 1.5em;
      }
      p {
      }
      a{
        text-decoration: none;
        color: #fff;
        background-color: #000;
        padding: 5px 10px; 
        width: 10em;
        text-align: center;
        border-radius: 5px;
        font-size: 1.2em;

      }
    }
  }

  img {
    width: 15em;
    height: 50%;
  }
`;
