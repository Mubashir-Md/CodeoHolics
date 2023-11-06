import React from "react";
import styled from "styled-components";
import contact from "src/assets/contact.jpg";
import { FaGlobe, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import NavBar from "./NavBar";

const Contact = () => {
  return (
    <ContactHome>
      <Card>
        <NavBar />
        <ContactPage>
          <h1>Let's get in touch</h1>
          <ContactWrapper>
            <FaGlobe />
            <FaInstagram />
            <FaLinkedin />
            <FaTwitter />
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
  backdrop-filter: blur(2px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
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
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  svg {
    font-size: 2em;
    margin: 10px;
    padding: 10px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
