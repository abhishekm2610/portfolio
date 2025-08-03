import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from './Lobby';
import ExperienceFloor from './ExperienceFloor';
import EducationFloor from './EducationFloor';
import ProjectsFloor from './ProjectsFloor';
import AwardsFloor from './AwardsFloor';
import ContactFloor from './ContactFloor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/floor/1" element={<ExperienceFloor />} />
        <Route path="/floor/2" element={<EducationFloor />} />
        <Route path="/floor/3" element={<ProjectsFloor />} />
        <Route path="/floor/4" element={<AwardsFloor />} />
        <Route path="/floor/5" element={<ContactFloor />} />
      </Routes>
    </Router>
  );
}

export default App;