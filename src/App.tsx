import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AuthRoutes from './Routes/AuthRoutes/AuthRoutes';
import Routess from './Routes/Routess';

const App: React.FC = () => {
  return (
    <Router>
      <AuthRoutes />
      <Routess />
    </Router>
  );
};

export default App;