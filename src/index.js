import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PrductProvider from "./Context/PrductProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrductProvider>
      <App />
    </PrductProvider>
  </React.StrictMode>
);
