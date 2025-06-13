import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="rv-app-shell">
      <Navbar />
      <div className="rv-shell-body">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
