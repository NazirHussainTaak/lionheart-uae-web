// main.tsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import "./i18n/config";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);


// import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import "./i18n/config";

// createRoot(document.getElementById("root")!).render(<App />);
