import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Cmp/Navbar";
import Footer from "./Cmp/Footer";
export const AnimationContext = React.createContext();


const one = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const two = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationContext.Provider value={[one , two]} >
          <Navbar />
          <App />
          <Footer />
      </AnimationContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
