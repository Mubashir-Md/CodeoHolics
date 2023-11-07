import React, { useContext } from "react";
import styled from "styled-components";
import Poster from "../assets/hack4mini.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const PastEvents = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <EventsPast isDarkMode={isDarkMode}>
      <img src={Poster} alt="" />
      <div className="details">
        <h2>Event Name</h2>
        <p>Event Description</p>
        <p>Event Date</p>
      </div>
    </EventsPast>
  );
};

export default PastEvents;

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
    width: 15em;
    height: 15em;
    border-radius: 5px;
    margin: 10px;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      border-radius: 10px;
      font-size: 2rem;
      color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
    }
    p {
      border-radius: 10px;
      font-size: 1rem;
      font-family: "Poppins", sans-serif;
      line-height: 1.5;
      color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
    }
  }

  .details > *{
    margin: 5px;
    padding: 5px;
  }
`;
