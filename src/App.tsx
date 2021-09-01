import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
}

export default App;
