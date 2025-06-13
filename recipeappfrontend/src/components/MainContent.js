import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipesPage from './pages/RecipesPage';
import ManagePage from './pages/ManagePage';
import LoginPage from './pages/LoginPage';

// PUBLIC_INTERFACE
function MainContent() {
  return (
    <main className="rv-main-content">
      <Router>
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default MainContent;
