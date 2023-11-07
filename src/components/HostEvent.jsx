import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import admin from "../assets/admin.jpg";
import NavBar from "./NavBar";

const HostEvent = () => {
  const nav = useNavigate();
  const [eventData, setEventData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventPoster: null,
    eventLink: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEventData({ ...eventData, eventPoster: file });
  };

  const submitEventDetails = async (e) => {
    e.preventDefault();

    console.log(eventData);
    try {
      if (eventData.eventPoster) {
        const storageRef = ref(storage, `eventPosters/${eventData.eventName}`);
        await uploadBytes(storageRef, eventData.eventPoster);
        const imageURL = await getDownloadURL(storageRef);

        setEventData({ ...eventData, eventPoster: imageURL });
        const docRef = await addDoc(
          collection(db, "events"),
          {
            eventName: eventData.eventName,
            eventDescription: eventData.eventDescription,
            eventDate: eventData.eventDate,
            eventLink: eventData.eventLink,
            eventPoster: imageURL,
          },
          eventData.eventName
        );
        console.log("Event doc written with ID: ", docRef.id);

        nav("/events");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <Wrapper>
      <Card>
        <NavBar/>
        <Hosting>
          <h1>Hey, welcome Admin</h1>
          <HostForm action="">
            <input
              type="text"
              placeholder="Event Name"
              value={eventData.eventName}
              name="eventName"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Event Description"
              value={eventData.eventDescription}
              name="eventDescription"
              onChange={handleInputChange}
            />
            <input
              type="date"
              placeholder="Event Date"
              value={eventData.eventDate}
              name="eventDate"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Event Link"
              value={eventData.eventLink}
              name="eventLink"
              onChange={handleInputChange}
            />
            <input
              type="file"
              accept="image/*"
              placeholder="Event Poster"
              name="eventPoster"
              onChange={handleImageUpload}
            />
          </HostForm>
          <button onClick={submitEventDetails}>Submit</button>
        </Hosting>
      </Card>
    </Wrapper>
  );
};

export default HostEvent;

const Wrapper = styled.div`
    background-image: url(${admin});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100dvh;
`;

const Card = styled.div`
    backdrop-filter: blur(4px) saturate(200%);
    -webkit-backdrop-filter: blur(4px) saturate(200%);
    background-color: rgba(255, 255, 255, 0.78);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    height: 100dvh;
    overflow: auto;
`;

const Hosting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
  }
`;
const HostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  // height: 50dvh;
  border: 2px solid #000;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  input {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px 0 0 0 solid #000;
  }
`;
