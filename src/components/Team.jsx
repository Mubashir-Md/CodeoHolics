import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import Person from "../assets/person.jpg";
import teamPic from "../assets/team.jpg";
import { FaInstagram } from "react-icons/fa";
import NavBar from "./NavBar";

const Team = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Card isDarkMode={isDarkMode}>
        <NavBar />
        <TeamHome isDarkMode={isDarkMode}>
          <h1>Meet the Team</h1>
          <TeamMembers>
            <TeamMember isDarkMode={isDarkMode}>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember isDarkMode={isDarkMode}>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember isDarkMode={isDarkMode}>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember isDarkMode={isDarkMode}>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember isDarkMode={isDarkMode}>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
          </TeamMembers>
        </TeamHome>
      </Card>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.div`
  background-image: url(${teamPic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Card = styled.div`
  backdrop-filter: blur(4px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "rgba(0,0,0,0.78)" : "rgba(255, 255, 255, 0.78)"};
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
  overflow: auto;
`;

const TeamHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    font-size: 2rem;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: ${({ isDarkMode }) =>
    isDarkMode ? "2px solid #fff" : "2px solid #000"};
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  margin: 20px;
  border-radius: 10px;
  img {
    width: 15em;
    height: 50%;
    border-radius: 5px;
  }
  svg {
    font-size: 2em;
    margin: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
  }
`;
