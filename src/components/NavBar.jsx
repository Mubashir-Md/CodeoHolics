import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/codeoholics.jpg";
import { FaBars } from "react-icons/fa";
import { PiToggleRightFill, PiToggleLeftFill } from "react-icons/pi";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  // Update the window width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <NavComponent>
      {windowWidth <= 700 && (
        <IconWrapper>
          <ImageButton className="image">
            <img src={LogoImage} />
            <ToggleButton onClick={handleClick} isDarkMode={isDarkMode}>
              {isDarkMode ? <PiToggleRightFill /> : <PiToggleLeftFill />}
            </ToggleButton>
          </ImageButton>
          <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </IconWrapper>
      )}
      {isMenuOpen && windowWidth <= 700 && (
        <>
          <ul>
            <List>
              {" "}
              <a href="/" isDarkMode={isDarkMode}>
                {" "}
                Home
              </a>
            </List>
            <List>
              {" "}
              <a href="/events" isDarkMode={isDarkMode}>
                {" "}
                Events
              </a>
            </List>
            <List>
              {" "}
              <a href="/resources" isDarkMode={isDarkMode}>
                Resources
              </a>
            </List>
            <List>
              {" "}
              <a href="/internships" isDarkMode={isDarkMode}>
                Internships
              </a>
            </List>
            <List>
              {" "}
              <a href="/contact" isDarkMode={isDarkMode}>
                {" "}
                Contact
              </a>
            </List>
          </ul>
        </>
      )}
      {windowWidth > 700 && (
        <>
          <ImageButton className="image">
            <img src={LogoImage} />
            <ToggleButton onClick={handleClick}>
              {isDarkMode ? <PiToggleRightFill /> : <PiToggleLeftFill />}
            </ToggleButton>
          </ImageButton>
          <ul>
            <List>
              {" "}
              <a href="/" isDarkMode={isDarkMode}>
                {" "}
                Home
              </a>
            </List>
            <List>
              {" "}
              <a href="/events" isDarkMode={isDarkMode}>
                {" "}
                Events
              </a>
            </List>
            <List>
              {" "}
              <a href="/resources" isDarkMode={isDarkMode}>
                Resources
              </a>
            </List>
            <List>
              {" "}
              <a href="/internships" isDarkMode={isDarkMode}>
                Internships
              </a>
            </List>
            <List>
              {" "}
              <a href="/contact" isDarkMode={isDarkMode}>
                {" "}
                Contact
              </a>
            </List>
          </ul>
        </>
      )}
    </NavComponent>
  );
};

export default NavBar;

const NavComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 10px 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 40%;
    max-width: 1200px;
    padding: 0 20px;
    margin: 10px;
    font-size: 1.1rem;
  }

  img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    padding: 10px;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ul {
      width: 100%;
      margin: 0;
      padding: 0;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
    img {
      width: 3em;
      height: 3em;
    }
  }
`;

const List = styled.li`
  cursor: pointer;
  margin: 10px;
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 700px) {

    a {
      font-size: 1rem;
      text-decoration: none;
    }
    
  }
}
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  align-items: center;

  svg {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

const ImageButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 10px;
  padding: 0;
  display: flex;
  
  justify-content: center;
  align-items: center;
  svg{
    width: 1.5em;
    height: 1.5em;
  }

  @media (max-width: 700px) {
    svg{
      width: 1em;
      height: 1em;
    }
`;
