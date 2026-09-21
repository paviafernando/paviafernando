import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource/press-start-2p";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/sections.css";
import "./styles/theme-effects.css";
import "./styles/print.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
