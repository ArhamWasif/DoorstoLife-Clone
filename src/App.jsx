import React from "react";
import Faqs from "./components/Faqs/Faqs";
import Beliefs from "./components/Faqs/Beliefs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Beliefs />} path="/belief" />
          <Route element={<Faqs />} path="/faqs" />
          <Route element={<Home />} path="/" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Login />} path="/login" />
        </Routes>{" "}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
