import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import AdDesigner from "./components/AdDesigner/AdDesigner";
import Votes from "./components/votes/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
