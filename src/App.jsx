import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events/Events";
import HostEvent from "./components/Events/HostEvent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/hostevent" element={<HostEvent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

