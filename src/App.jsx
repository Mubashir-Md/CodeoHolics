import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import HostEvent from "./components/HostEvent";
import RegistrationForm from "./components/RegistrationForm";
import RegSuccess from "./components/RegSuccess";
import EventDetails from "./components/EventDetails";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hostevent" element={<HostEvent />} />
        <Route path="/register/:eventName" element={<RegistrationForm />} />
        <Route path="/event-details/:eventName" element={<EventDetails />} />
        <Route path="/reg-success" element={<RegSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
