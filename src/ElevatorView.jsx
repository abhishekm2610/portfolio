import ElevatorShell from './ElevatorShell';
import Experience from './floors/Experience';
import Education from './floors/Education';
import Projects from './floors/Projects';
import Awards from './floors/Awards';
import Contact from './floors/Contact';

export default function ElevatorView() {
  return (
    <ElevatorShell>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>
      <section id="projects"><Projects /></section>
      <section id="awards"><Awards /></section>
      <section id="contact"><Contact /></section>
    </ElevatorShell>
  );
}
