// src/components/FloorNavigation.jsx
import React, { useEffect, useRef, useState } from "react";
import "./FloorNavigation.css";

export default function FloorNavigation({ scrollToFloor }) {
  const floors = [
    { id: "floor1", label: "🗂 Experience" },
    { id: "floor2", label: "🎓 Education" },
    { id: "floor3", label: "💻 Projects" },
    { id: "floor4", label: "🏆 Awards" },
    { id: "floor5", label: "📬 Contact" },
    { id: "lobby", label: "⬆ Lobby" },
  ];

  const [visible, setVisible] = useState(true);
  const [canToggle, setCanToggle] = useState(false);
  const inactivityTimeout = useRef(null);

  useEffect(() => {
    inactivityTimeout.current = setTimeout(() => {
      setVisible(false);
      setCanToggle(true);
    }, 3000); // 3 seconds

    return () => {
      clearTimeout(inactivityTimeout.current);
    };
  }, []);

  const toggleVisibility = () => {
    setVisible(!visible);
    setCanToggle(!visible);
  };

  return (
    <>
      <div className={`floor-nav ${visible ? "visible" : "hidden"}`}>
        {floors.map((floor) => (
          <button
            key={floor.id}
            onClick={() => scrollToFloor(floor.id)}
            className="floor-button"
          >
            {floor.label}
          </button>
        ))}
      </div>

      {canToggle && !visible && (
        <button className="floor-toggle-button" onClick={toggleVisibility}>
          🛗
        </button>
      )}
    </>
  );
}
