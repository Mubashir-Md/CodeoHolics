import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';
import LogoImage from "../assets/codeoholics.jpeg";

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <NavComponent>
      <div className="image">
        <img src={LogoImage} />
      </div>
      <ul>
        <li> <a href="/"> Home</a></li>
        <li> <a href=""> About</a></li>
        <li> <a href="/events"> Events</a></li>
        <li> <a href=""> Projects</a></li>
        <li> <a href=""> Contact</a></li>
      </ul>
    </NavComponent>
  );
};

export default NavBar;

const NavComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #000;
  font-family: "Poppins", sans-serif;
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
  }
  li {
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  img {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    padding: 10px;

  }
`;
