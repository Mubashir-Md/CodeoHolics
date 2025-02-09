import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import admin from "../assets/admin.jpg";
import NavBar from "./NavBar";
import { ThemeContext } from "../contexts/ThemeContextProvider";
import { Loader } from "lucide-react";

const HostEvent = () => {
  const nav = useNavigate();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
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
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setEventData((prev) => ({
      ...prev,
      eventPoster: file,
    }));
  };

  const submitEventDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(eventData);
    try {
      if (eventData.eventPoster) {
        const storageRef = ref(storage, `eventPosters/${eventData.eventName}`);
        await uploadBytes(storageRef, eventData.eventPoster);
        const imageURL = await getDownloadURL(storageRef);

        setEventData((prev) => ({
          ...prev,
          eventPoster: imageURL,
        }));
        const docRef = await addDoc(collection(db, "events"), {
          eventName: eventData.eventName,
          eventDescription: eventData.eventDescription,
          eventDate: eventData.eventDate,
          eventLink: eventData.eventLink,
          eventPoster: imageURL,
        });
        console.log("Event doc written with ID: ", docRef.id);
        setEventData({
          eventName: "",
          eventDescription: "",
          eventDate: "",
          eventPoster: null,
          eventLink: "",
        });
        nav("/events");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <Card isDarkMode={isDarkMode}>
        <NavBar />
        {loading ? (
          <LoaderContainer>
            <LoaderIcon isDarkMode={isDarkMode} />
          </LoaderContainer>
        ) : (
          <Hosting>
            <HostForm action="">
              <h1 style={{ textAlign: "center" }}>Let's host an event...</h1>
              <div>
                <label htmlFor="eventName">Event Name</label>
                <input
                  type="text"
                  placeholder="Enter Event Name"
                  value={eventData.eventName}
                  name="eventName"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="eventDesc">Event Description</label>
                <input
                  type="text"
                  placeholder="Enter Event Description"
                  value={eventData.eventDescription}
                  name="eventDescription"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="eventDate">Select Event Date</label>
                <input
                  type="date"
                  placeholder="Event Date"
                  value={eventData.eventDate}
                  name="eventDate"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="eventLink">Event Link</label>
                <input
                  type="text"
                  placeholder="Enter Event Link"
                  value={eventData.eventLink}
                  name="eventLink"
                  onChange={handleInputChange}
                />
              </div>
              <label htmlFor="eventPoster">Upload Event Poster</label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  placeholder="Event Poster"
                  name="eventPoster"
                  onChange={handleImageUpload}
                />
              </div>
              <button onClick={submitEventDetails}>Submit</button>
            </HostForm>
          </Hosting>
        )}
      </Card>
    </Wrapper>
  );
};

export default HostEvent;

const Wrapper = styled.div`
  background-image: url(${admin});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 100dvh;
`;

const Card = styled.div`
  backdrop-filter: blur(17px) saturate(200%);
  filter: drop-shadow(10px 10px 10px white);
  -webkit-backdrop-filter: blur(17px) saturate(200%);
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "rgba(0,0,0,0.5)" : "rgba(255, 255, 255, 0.5)"};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
  border: 1px solid rgba(209, 213, 219, 0.3);
  height: 100dvh;
  overflow: auto;
`;

const Hosting = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
const HostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  max-width: 600px;
  width: 100%;
  // height: 50dvh;
  box-shadow: 0 31.3944px 33.0467px #a7a4ff,
    inset 0 -4.95701px 16.5233px rgb(188 188 188 / 40%);
  margin: 10px;
  padding: 20px;
  border-radius: 25px;
  h1 {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
  }
  div {
    width: 100%;
    margin: 10px 0;
  }
  input {
    width: 90%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #a7a4ff;
  }
  button {
    margin: 10px;
    padding: 10px 30px;
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer;
    background-color: #a7a4ff;
    color: #000;
    font-size: 1rem;
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
  color: ${({ isDarkMode }) =>
    isDarkMode ? "white" : "black"};
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
