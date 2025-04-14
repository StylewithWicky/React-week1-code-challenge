
import React from 'react';
import './SearchBar.css'; 

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input 
        type="text" 
        placeholder="Search expenses..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-bar"
      />
    </div>
  );
}

export default SearchBar;
