import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import NavBar from "./NavBar";
import Event from "../assets/events.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";


function EventDetails() {
  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext);
  const { eventName } = useParams();
  const [registrations, setRegistrations] = useState([]);
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const eventDocRef = doc(db, "events", eventName);
        const registrationsCollectionRef = collection(
          eventDocRef,
          "registrations"
        );
        const querySnapshot = await getDocs(registrationsCollectionRef);

        const registrationData = [];
        querySnapshot.forEach((doc) => {
          registrationData.push({ id: doc.id, ...doc.data() });
        });

        setRegistrations(registrationData);
      } catch (error) {
        console.error("Error fetching registrations: ", error);
      }
    };

    fetchRegistrations();
  }, [eventName]);
  return (
    <Wrapper>
      <Card isDarkMode={isDarkMode}>
        <NavBar />
        <EventDetailsWrapper>
          <h1>Event Details for {eventName}</h1>
          <RegistrationsList>
            {registrations.map((registration) => (
              <RegistrationItem key={registration.id}>
                <p>Name: {registration.userName}</p>
                <p>Email: {registration.userEmail}</p>
                <p>Roll Number: {registration.userRollNo}</p>
                <p>Phone Number: {registration.userPhoneNo}</p>
              </RegistrationItem>
            ))}
          </RegistrationsList>
        </EventDetailsWrapper>
      </Card>
    </Wrapper>
  );
}

export default EventDetails;

const Wrapper = styled.div`
  background-image: url(${Event});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const Card = styled.div`
  backdrop-filter: blur(12px) saturate(200%);
  -webkit-backdrop-filter: blur(14px) saturate(200%);
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "rgba(0,0,0,0.78)" : "rgba(255, 255, 255, 0.78)"};
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
  overflow: auto;
`;

const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: transparent;
    color: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};
  }
`;
const RegistrationsList = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const RegistrationItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: ${({ isDarkMode }) => (isDarkMode ? "2px solid #000" : "2px solid #fff")} ;
  border-radius: 5px;
  background-color: transparent;
  color: ${({ isDarkMode }) => (isDarkMode ? "#000" : "#fff")};

  @media (max-width: 700px) {
    padding: 5px;
    margin: 5px;
    font-size: 0.8rem;
  }
`;
