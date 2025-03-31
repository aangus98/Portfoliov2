import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import MainPage from './pages/mainPage';
import AboutMe from './pages/aboutMe';

const App: React.FC = () => {
  return (
    <Router>
      <AboutMe />
    </Router>
  );
};

export default App;


