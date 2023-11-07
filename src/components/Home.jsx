import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import about from "../assets/about.jpg";
import Logo from "../assets/codeoholics.jpg";
import { FaInstagram } from "react-icons/fa";
import Person from "../assets/person.jpg";

const Home = () => {
  return (
    <HomeWrapper>
      <Card>
        <NavBar />
        <HomePage>
          <div className="image">
            <img src={Logo} alt="" />
          </div>
          <div className="content">
            <h1>Codeoholics - The Ultimate Coding Club</h1>
            <p>
              Are you passionate about coding, programming, and all things Tech?
              Do you want to join a community of like-minded individuals who
              share your love for computer science? Then look no further,
              because Codeoholics is the club for you.
            </p>
          </div>
        </HomePage>

        <Team>
          <h1>Meet the Team</h1>
          <TeamMembers>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
            <TeamMember>
              <img src={Person} alt="" />
              <div className="content">
                <h2>Abdul Basit</h2>
                <p>President</p>
                <FaInstagram />
              </div>
            </TeamMember>
          </TeamMembers>
        </Team>
      </Card>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-image: url(${about});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
  background-attachment: fixed;
`;

const Card = styled.div`
  backdrop-filter: blur(4px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  height: 100dvh;
  overflow: auto;
`;

const HomePage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .image {
    img {
      width: 25em;
      height: 25em;
      border-radius: 50%;
      // opacity: 0.6;
      saturate: 0.5;
      blur: 0.8;
    }
  }
  .content {
    width: 50%;
    h1 {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
    }
    p {
      margin: 10px;
      padding: 10px;
      border-radius: 10px;
      font-size: 1.2rem;
      font-family: "Poppins", sans-serif;
      line-height: 1.5;
    }
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .image {
      img {
        width: 15em;
        height: 15em;
        border-radius: 50%;
      }
    }
    .content {
      width: 100%;
      text-align: center;
      h1 {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        font-size: 1.5rem;
      }
      p {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        line-height: 1.5;
      }
    }
  }
`;



const Team = styled.div`
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
  border: 2px solid #000;
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
