import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { toast } from "react-toastify";
import { AuthCard } from "./components/AuthCard";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
      <AuthPage />
    </div>
  );
}

export default App;
