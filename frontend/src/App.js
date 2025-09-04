import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./components/MainMenu";
import OnlineCracking from "./components/OnlineCracking";
import DisclaimerModal from "./components/DisclaimerModal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DisclaimerModal />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/online-cracking" element={<OnlineCracking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;