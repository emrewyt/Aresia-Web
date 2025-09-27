import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import OnlineCracking from "./components/OnlineCracking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/OnlineFix" element={<OnlineCracking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;