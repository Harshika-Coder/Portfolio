import React from "react";
import "./style.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Recommendations from "./Recommendation";
import Feedback from "./Feedback";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Project />
      <About />
      <Contact />
      <Recommendations />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
