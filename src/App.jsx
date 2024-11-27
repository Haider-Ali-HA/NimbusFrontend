import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import About from "./component/About";
import Pricing from "./component/Pricing";
import Client from "./component/Client";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Pricing />
      <Client />
      <About />
      <Footer />
    </>
  );
};

export default App;
