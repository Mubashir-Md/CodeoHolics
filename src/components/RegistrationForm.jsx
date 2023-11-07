import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import fillform from "../assets/fillform.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const RegistrationForm = () => {
  const nav = useNavigate();
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);
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
    nav("/events/reg-success");
  };
  return (
    <Wrapper>
      <Card>
        <NavBar isDarkMode={ isDarkMode} />
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
      </Card>
    </Wrapper>
  );
};

export default RegistrationForm;

const Wrapper = styled.div`
  background-image: url(${fillform});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100dvh;
`;

const Card = styled.div`
  backdrop-filter: blur(8px) saturate(200%);
  -webkit-backdrop-filter: blur(4px) saturate(200%);
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px auto;
  border-radius: 10px;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
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
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
