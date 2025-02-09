import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import fillform from "../assets/fillform.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Loader } from "lucide-react";
import RegSuccess from "./RegSuccess";

const RegistrationForm = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { eventName } = useParams();
  console.log({ eventName });
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    if (location.state && location.state.userDetails) {
      setUserDetails(location.state.userDetails);
    }
  }, [location.state]);
  
  const handleConfirm = async (e) => {
    setLoading(true);
    
    try {
      const eventDocRef = doc(db, "events", eventName);
      const registrationCollectionRef = collection(
        eventDocRef,
        "registrations"
        );
        
        await addDoc(registrationCollectionRef, userDetails);
        console.log("Registration doc written with ID: ", eventDocRef.id);
        setSuccess(true);
        setLoading(false);
      } catch (error) {
        console.log("Error confirming registration...", error);
        setLoading(false);
      }
    };
    console.log(location.state);
    return (
    <Wrapper>
      <Card isDarkMode={isDarkMode}>
        <NavBar isDarkMode={isDarkMode} />
        <FormWrapper>
          {loading ? (
            <LoaderContainer>
              <LoaderIcon isDarkMode={isDarkMode} />
            </LoaderContainer>
          ) : success ? (
            <RegSuccess />
          ) : (
            <>
              <h1>Confirm your registration</h1>
              <Register>
                <p>{userDetails?.userName}</p>
                <p>{userDetails?.email}</p>
                <button onClick={handleConfirm}>Confirm Registration</button>
              </Register>
            </>
          )}
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
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "rgba(0,0,0,0.78)" : "rgba(255, 255, 255, 0.78)"};
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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

const LoaderIcon = styled(Loader)`
  animation: spin 1s linear infinite;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  height: 3rem;
  width: 3rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
