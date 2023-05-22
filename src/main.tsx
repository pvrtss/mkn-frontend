import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { OpenAPI } from "./api/generated";
import { getCookie } from "./utils/getCookie";

const getToken = async () => {
  return getCookie("access_token");
};

OpenAPI.TOKEN = await getToken();
OpenAPI.WITH_CREDENTIALS = true;
OpenAPI.CREDENTIALS = "include";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <ToastContainer
      theme="dark"
      style={{ fontFamily: "inherit" }}
      autoClose={30000}
    />
  </React.StrictMode>
);
