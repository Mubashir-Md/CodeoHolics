import React from "react";
import NavBar from "./NavBar";
import about from "../assets/about.jpg";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";
import Person from "../assets/person.jpg";

const About = () => {
  return (
    <Wrapper>
      <Card>
        <NavBar />
        <Content>
          <h1>Codeoholics - The Ultimate Coding Club</h1>
          <p>
            Are you passionate about coding, programming, and all things Tech?
            Do you want to join a community of like-minded individuals who share
            your love for computer science? Then look no further, because
            Codeoholics is the club for you.
          </p>
        </Content>
        <Team>
          <h1>Meet the Team</h1>
          <TeamMembers>
            <TeamMember>
              <img src={Person} alt="" />
              <h2>Abdul Basit</h2>
              <p>President</p>
              <FaInstagram />
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <h2>Abdul Basit</h2>
              <p>President</p>
              <FaInstagram />
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <h2>Abdul Basit</h2>
              <p>President</p>
              <FaInstagram />
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <h2>Abdul Basit</h2>
              <p>President</p>
              <FaInstagram />
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <h2>Abdul Basit</h2>
              <p>President</p>
              <FaInstagram />
            </TeamMember>
          </TeamMembers>
        </Team>
      </Card>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  background-image: url(${about});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
`;
const Card = styled.div`
  backdrop-filter: blur(2px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60dvh;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    font-size: 2rem;
  }
  p {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    width: 80vw;
    font-size: 1.4rem;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40dvh;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    font-size: 2rem;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 40dvh;
`;

const TeamMember = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid #000;
  margin: 10px;
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
`;
