import React, { useState } from "react";
import "../styles/index.css";


const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("");

  return (
    <div className="traffic-light-container">
      <div
        className={`light red ${activeLight === "red" ? "glow" : ""}`}
        onClick={() => setActiveLight("red")}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "glow" : ""}`}
        onClick={() => setActiveLight("yellow")}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "glow" : ""}`}
        onClick={() => setActiveLight("green")}
      ></div>
    </div>
  );
};

export default TrafficLight;
