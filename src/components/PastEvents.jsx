import React, { useContext } from "react";
import styled from "styled-components";
import Poster from "../assets/hack4mini.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const PastEvents = (props) => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <EventsPast isDarkMode={isDarkMode}>
      <img src={props.poster} alt="" />
      <div className="details">
        <h2>{ props.eventName} </h2>
        <p>{props.eventDesc}</p>
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
    max-width: 350px;
    max-height: 350px;
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
      text-align: center;
      color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
    }
  }

  .details > *{
    margin: 5px;
    padding: 5px;
  }
`;
