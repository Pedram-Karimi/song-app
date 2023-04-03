import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { UserAthCtxProvider } from "./context/userAuthCtx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserAthCtxProvider>
    <App />
  </UserAthCtxProvider>
);
