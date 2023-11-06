import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import bg from "../assets/bg.jpg";
import Logo from "../assets/codeoholics.jpeg";

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
      </Card>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;

`;

const Card = styled.div`
  backdrop-filter: blur(5px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  height: 100dvh;
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
`;
