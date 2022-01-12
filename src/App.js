import React from "react";
import "./index.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Scan from "./components/Scan";
import Location from "./components/Location";
import Selections from "./components/Selections";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/scan" element={<Scan />} />
        <Route path="/location" element={<Location />} />
        <Route path="/selections" element={<Selections />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
