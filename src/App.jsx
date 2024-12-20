import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Pricing from "./component/Pricing";
import Client from "./component/Client";
import Contact from "./component/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Pricing />
      <Client />
      <About />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
