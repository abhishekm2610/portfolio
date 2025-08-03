import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Lobby from './Lobby.jsx';
import ExperienceFloor from './ExperienceFloor.jsx';
import EducationFloor from './EducationFloor.jsx';
import ProjectsFloor from './ProjectsFloor.jsx';
import AwardsFloor from './AwardsFloor.jsx';
import ContactFloor from './ContactFloor.jsx';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={600}
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Lobby />} />
          <Route path="/floor/1" element={<ExperienceFloor />} />
          <Route path="/floor/2" element={<EducationFloor />} />
          <Route path="/floor/3" element={<ProjectsFloor />} />
          <Route path="/floor/4" element={<AwardsFloor />} />
          <Route path="/floor/5" element={<ContactFloor />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default AnimatedRoutes;
