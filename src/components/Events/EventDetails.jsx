import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import NavBar from "../NavBar";
function EventDetails() {
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
    <>
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
    </>
  );
}

export default EventDetails;

const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
const RegistrationsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const RegistrationItem = styled.li`
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  width: 50%;
  background-color: #fff;
  color: #000;
`;
