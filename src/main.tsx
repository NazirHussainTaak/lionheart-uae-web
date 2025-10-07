// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootEl = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import "./i18n/config";

// createRoot(document.getElementById("root")!).render(<App />);
