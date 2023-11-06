import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const RegSuccess = () => {
  const nav = useNavigate();
  const gotoHome = () => {
    nav("/");
  };
  return (
    <Success>
      <h1>Registration Successful!</h1>
      <button onClick={gotoHome}>Go to Home</button>
    </Success>
  );
};

export default RegSuccess;

const Success = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #fff;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
    h1{
        color: #fff;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: #000;
    }
    button{
        margin: 10px;
        padding: 10px 20px;
        border-radius: 10px;
        background-color: #000;
        color: #fff;
        border: none;
        cursor: pointer;
    }
`