import React from "react";
import ElevatorShell from "./ElevatorShell";
import "./global.css";

export default function App() {
  return (
    <ElevatorShell>
      <section id="lobby">🏢 Lobby - Welcome</section>
      <section id="floor1">Experience Floor</section>
      <section id="floor2">Education Floor</section>
      <section id="floor3">Projects Floor</section>
      <section id="floor4">Awards Floor</section>
      <section id="floor5">Contact Floor</section>
    </ElevatorShell>
  );
}
