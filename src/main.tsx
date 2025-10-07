// src/main.tsx (or wherever you mount the router)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </React.StrictMode>
  </React.StrictMode>
);


// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import "./i18n/config";

// createRoot(document.getElementById("root")!).render(<App />);
