import React from "react";
import "./App.css";
import IncreaseDecrease from "./IncreaseDecrease";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <div className="App">
      {/* <IncreaseDecrease></IncreaseDecrease> */}
      <IncreaseDecrease />
      <LoginPage />
    </div>
  );
}
