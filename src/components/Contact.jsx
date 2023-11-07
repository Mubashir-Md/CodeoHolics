import React, { useContext } from "react";
import styled from "styled-components";
import contact from "../assets/contact.jpg";
import { GrInstagram } from "react-icons/gr";
import { BsGlobe } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";  
import { FaXTwitter } from "react-icons/fa6";

import NavBar from "./NavBar";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const Contact = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <ContactHome>
      <Card isDarkMode={isDarkMode}>
        <NavBar />
        <ContactPage isDarkMode={isDarkMode}>
          <h1>Let's get in touch</h1>
          <ContactWrapper isDarkMode={isDarkMode}>
            <BsGlobe />
            <GrInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </ContactWrapper>
        </ContactPage>
      </Card>
    </ContactHome>
  );
};

export default Contact;

const ContactHome = styled.div`
  background-image: url(${contact});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
`;

const Card = styled.div`
  backdrop-filter: blur(5px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: ${({ isDarkMode }) => (isDarkMode ? "rgba(0,0,0,0.78)" : "rgba(255, 255, 255, 0.78)")};
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
`;
const ContactPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60dvh;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  
    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  svg {
    font-size: 4rem;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};

    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
`;
