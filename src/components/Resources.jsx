import React from "react";
import resource from "../assets/resources.jpg";
import styled from "styled-components";
import NavBar from "./NavBar";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { BiSolidLockAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Resources = () => {
  const nav = useNavigate();
  const [user, setUser] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));

        const user = data.user;
        const userEmail = user.email;
        if (userEmail === "mdmubashirahmed12345@gmail.com") {
          nav("/events/hostevent");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  };
  return (
    <ResourceHome>
      <Card>
        <NavBar />
        <ResourcesContent>
          <button className="google" onClick={handleSignIn}>
            Share a Resource <BiSolidLockAlt />
          </button>
          <h1>Resources</h1>
          
        </ResourcesContent>
      </Card>
    </ResourceHome>
  );
};

export default Resources;

const ResourceHome = styled.div`
  background-image: url(${resource});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
`;

const Card = styled.div`
  backdrop-filter: blur(10px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
`;

const ResourcesContent = styled.div`
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
  button.google {
    margin: 10px auto;
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: #fff;
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    svg {
      font-size: 1.2rem;
      margin: 10px;
    }
`;
