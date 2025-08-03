// src/components/ElevatorShell.jsx
import React, { useState, useEffect } from "react";
import FloorNavigation from "./FloorNavigation";
import "./ElevatorShell.css";

const floors = [
  { id: "floor1", label: "🗂 Experience" },
  { id: "floor2", label: "🎓 Education" },
  { id: "floor3", label: "💻 Projects" },
  { id: "floor4", label: "🏆 Awards" },
  { id: "floor5", label: "📬 Contact" },
  { id: "lobby", label: "⬆ Lobby" },
];

export default function ElevatorShell({ children }) {
  const [doorState, setDoorState] = useState("open");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scrollToFloor = (floorId) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDoorState("closing");

    setTimeout(() => {
      const target = document.getElementById(floorId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }

      setTimeout(() => {
        setDoorState("opening");
        setTimeout(() => {
          setDoorState("open");
          setIsTransitioning(false);
        }, 600); // door opening
      }, 700); // scroll complete
    }, 600); // door closing
  };

  return (
    <div className="elevator-shell">
      {/* Elevator doors */}
      <div className={`elevator-doors door-${doorState}`}>
        <div className="door-left" />
        <div className="door-right" />
      </div>

      {/* Navigation Buttons */}
      <FloorNavigation scrollToFloor={scrollToFloor} />

      {/* Floors container */}
      <div className="floors-container">{children}</div>
    </div>
  );
}
