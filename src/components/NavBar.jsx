import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoImage from "../assets/codeoholics.jpg";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="image">
            <img src={LogoImage} />
          </div>
          <FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </IconWrapper>
      )}
      {isMenuOpen && windowWidth <= 700 && (
        <>
          <ul>
            <li>
              {" "}
              <a href="/"> Home</a>
            </li>
            <li>
              {" "}
              <a href="/about"> About</a>
            </li>
            <li>
              {" "}
              <a href="/events"> Events</a>
            </li>
            {/* <li>
              {" "}
              <a href=""> Projects</a>
            </li> */}
            <li>
              {" "}
              <a href="/contact"> Contact</a>
            </li>
          </ul>
        </>
      )}
      {windowWidth > 700 && (
        <>
          <div className="image">
            <img src={LogoImage} />
          </div>
          <ul>
            <li>
              {" "}
              <a href="/"> Home</a>
            </li>
            <li>
              {" "}
              <a href="/about"> About</a>
            </li>
            <li>
              {" "}
              <a href="/events"> Events</a>
            </li>
            {/* <li>
              {" "}
              <a href=""> Projects</a>
            </li> */}
            <li>
              {" "}
              <a href="/contact"> Contact</a>
            </li>
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
  // background-color: #000;
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
    margin: 0;
    font-size: 1.1rem;
    color: #000;
    
  }
  li {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    // color: #fff;
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
    li {
      margin: 10px;
    }
    img {
      width: 3em;
      height: 3em;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  align-items: center;

  .image {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  @media (min-width: 700px) {
    display: none;
  }
`;
