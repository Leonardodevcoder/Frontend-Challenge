import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        autoClose={2500}
        closeButton={true}
        position="top-right"
      />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
