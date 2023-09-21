import * as React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import "./CSS/App.css"
import ProjectProposal from './Components/ProjectProposal';
import About from './Components/About';
import Header from './Components/Header';
import Team from './Components/Team';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='project_proposal' element={<ProjectProposal />} />
        <Route path='ourteam' element={<Team />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
