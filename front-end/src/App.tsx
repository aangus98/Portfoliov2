import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/mainPage';

const App: React.FC = () => {
  return (
    <Router>
      <MainPage />
    </Router>
  );
};

export default App;


