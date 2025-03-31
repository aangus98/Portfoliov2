import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExperiencePage from './pages/experience';
// import Projects from './pages/projects';
// import MainPage from './pages/mainPage';
// import AboutMe from './pages/aboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <ExperiencePage />
    </Router>
  );
};

export default App;


