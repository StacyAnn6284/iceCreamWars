import "./AdDesigner.css";
import { useState } from "react";

function AdDesigner() {
  const [flavor, setFlavor] = useState("Sea Monster");
  const duttonFlavor = () => {
    setFlavor("Sorta Beth Dutton");
  };
  const monsterFlavor = () => {
    setFlavor("Sea Monster");
  };
  const tracksFlavor = () => {
    setFlavor("John Deere Tracks");
  };

  const [theme, setTheme] = useState(true);
  const lightTheme = () => {
    setTheme(true);
  };
  const darkTheme = () => {
    setTheme(false);
  };

  const [fontSize, setFontSize] = useState(45);
  const incrementfontSize = () => {
    setFontSize(fontSize + 1);
  };
  const decrementfontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <div className={theme ? "ad" : "darkAd"}>
        <p>Vote for</p>
        <h3 style={{ fontSize: `${fontSize}px` }}>{flavor}</h3>
      </div>
      <h2>What to Support</h2>
      <div className="buttons">
        <button onClick={duttonFlavor}> Sorta Beth Dutton</button>
        <button onClick={monsterFlavor}>Sea Monster</button>
        <button onClick={tracksFlavor}>John Deere Tracks</button>
      </div>
      <h2>Color Theme</h2>
      <div className="buttons">
        <button onClick={lightTheme}>Light</button>
        <button onClick={darkTheme}>Dark</button>
      </div>
      <h2>Font Size</h2>
      <div className="buttons">
        <button onClick={decrementfontSize}>Down</button>
        <h2>{fontSize}</h2>
        <button onClick={incrementfontSize}>Up</button>
      </div>
    </div>
  );
}

export default AdDesigner;
