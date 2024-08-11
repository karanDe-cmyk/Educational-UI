import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from "./Component/About";
import Course from "./Component/Course";
import Price from "./Component/Price";
import Video from "./Component/Video";
import Contact from "./Component/Contact";
import Sidebar from "./Component/Sidebar";
import GoToBtn from "./Component/GoToBtn.js";
import Development from "./Component/Development.js";
import All from "./Component/All.js";
import Designing from "./Component/Designing.js";
import Tool from "./Component/Tool.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/course" element={<Course />}></Route>
          <Route path="/price" element={<Price />}></Route>
          <Route path="/video" element={<Video />}>
            <Route path="all" element={<All />}></Route>
            <Route path="development" element={<Development />}></Route>
            <Route path="designing" element={<Designing />}></Route>
            <Route path="tool" element={<Tool />}></Route>
          </Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
      <GoToBtn />
    </>
  );
}

export default App;
