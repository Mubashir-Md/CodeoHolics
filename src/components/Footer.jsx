import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <FooterSection isDarkMode={isDarkMode}>
      <p>
        Made with ❤️ by <a href="https://mubashir-md.netlify.app/" target="_blank">Mubashir</a>
      </p>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.div`
  margin-top: auto;
  color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  padding: 10px;
  text-align: center;
  p{
    font-size: 1.2rem;
  }
  a {
    font-weight: bold;
    color: ${({ isDarkMode }) => (isDarkMode ? "#fff" : "#000")};
  }
`;
