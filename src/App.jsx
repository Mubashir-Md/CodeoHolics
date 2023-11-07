import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import HostEvent from "./components/HostEvent";
import RegistrationForm from "./components/RegistrationForm";
import RegSuccess from "./components/RegSuccess";
import EventDetails from "./components/EventDetails";
import Contact from "./components/Contact";
import Internships from "./components/Internships";
import Resources from "./components/Resources";
import PostInternship from "./components/PostInternship";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/post" element={<PostInternship />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/hostevent" element={<HostEvent />} />
        <Route path="/events/register/:eventName" element={<RegistrationForm />} />
        <Route path="/events/event-details/:eventName" element={<EventDetails />} />
        <Route path="/events/reg-success" element={<RegSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
