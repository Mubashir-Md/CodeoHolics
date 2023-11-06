import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const RegistrationForm = () => {
  const nav = useNavigate();
  const { eventName } = useParams();
  console.log({ eventName });

  const [userDetails, setUserDetails] = useState({
    eventName,
    userName: "",
    userEmail: "",
    userRollNo: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const eventDocRef = doc(db, "events", eventName);
    const registrationCollectionRef = collection(eventDocRef, "registrations");

    await addDoc(registrationCollectionRef, userDetails);
    console.log("Registration doc written with ID: ", eventDocRef.id);
    nav("/reg-success");
  };
  return (
    <>
      <NavBar />
      <FormWrapper>
        <h1>Register for the event here</h1>
        <Register onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="userName"
            onChange={handleInputChange}
            value={userDetails.userName}
          />
          <input
            type="text"
            placeholder="Email"
            name="userEmail"
            onChange={handleInputChange}
            value={userDetails.userEmail}
          />
          <input
            type="text"
            placeholder="Roll Number"
            name="userRollNo"
            onChange={handleInputChange}
            value={userDetails.userRollNo}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="userPhoneNo"
            onChange={handleInputChange}
            value={userDetails.userPhoneNo}
          />
          <button>Submit</button>
        </Register>
      </FormWrapper>
    </>
  );
};

export default RegistrationForm;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  width: 50%;
  h1 {
    color: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #000;
  }
`;

const Register = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #000;
    background-color: #fff;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #fff;
    color: #000;
    border: none;
    cursor: pointer;
  }
`;
