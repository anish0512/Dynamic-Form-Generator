import React from "react";
import ReactDOM from "react-dom/client";
import App from "../pages/App";  // Make sure this points to your main component
import "../index.css";  // Make sure your global CSS is imported

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);