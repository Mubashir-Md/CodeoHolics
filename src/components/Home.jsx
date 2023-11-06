import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import { GoogleAuthProvider } from "firebase/auth";

const Home = () => {
  const provider = new GoogleAuthProvider();
  return (
    <>
      <NavBar />
      <HomePage>Hello, Welcome to Codeoholics Hackathon</HomePage>
      <button>Sign In</button>
    </>
  );
};

export default Home;

const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
