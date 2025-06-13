import React from 'react';
import './Sidebar.css';

// PUBLIC_INTERFACE
function Sidebar() {
  return (
    <aside className="rv-sidebar">
      <div className="rv-sidebar-header">Categories</div>
      <ul className="rv-category-list">
        <li className="rv-category-item active">All</li>
        <li className="rv-category-item">Breakfast</li>
        <li className="rv-category-item">Lunch</li>
        <li className="rv-category-item">Dinner</li>
        <li className="rv-category-item">Dessert</li>
        <li className="rv-category-item">Snacks</li>
      </ul>
      {/* Add more items or dynamic loading in the future */}
    </aside>
  );
}

export default Sidebar;
