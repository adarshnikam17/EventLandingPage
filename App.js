import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; 
import EventLandingPage from "./demos/EventLandingPage"
import SimpleContactUs from "./components/forms/SimpleContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/contact" element={<SimpleContactUs />} />
        
        </Routes>
      </Router>
    </>
  );
}
