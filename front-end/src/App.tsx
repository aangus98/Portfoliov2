import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './pages/projects';
// import MainPage from './pages/mainPage';
// import AboutMe from './pages/aboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <Projects />
    </Router>
  );
};

export default App;


