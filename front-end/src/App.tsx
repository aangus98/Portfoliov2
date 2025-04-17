import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import ExperiencePage from './pages/experience';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
};

export default App;



