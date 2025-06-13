import React from 'react';
import './Navbar.css';

// PUBLIC_INTERFACE
function Navbar() {
  return (
    <nav className="rv-navbar">
      <span className="rv-logo">
        <span className="rv-logo-symbol" title="RecipeVault">&#127859;</span>
        <span>RecipeVault</span>
      </span>
      <div className="rv-nav-links">
        <a href="/" className="rv-nav-link active">Recipes</a>
        <a href="/manage" className="rv-nav-link">Manage</a>
        <a href="/login" className="rv-nav-link">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
