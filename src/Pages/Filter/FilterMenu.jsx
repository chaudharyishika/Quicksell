import React from "react";
import './FilterMenu.css';  
const FilterMenu = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="filter-menu">
      <div className="filter-option">
        <label htmlFor="groupBy">Group By:</label>
        <select 
          id="groupBy" 
          value={groupBy} 
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="filter-option">
        <label htmlFor="sortBy">Sort By:</label>
        <select 
          id="sortBy" 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
