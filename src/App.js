import React from "react";
import "./App.scss";

import {
  About,
  FooterContact,
  Header,
  Skills,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <FooterContact />
    </div>
  );
};

export default App;
