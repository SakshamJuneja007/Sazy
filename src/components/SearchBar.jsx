import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import './SearchBar.css'; // Import the CSS file

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const navigate = useNavigate(); // Use the hook to navigate

  // Handle key presses (Escape to close and Enter to search)
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setShowSearch(false); // Close on Escape
    if (e.key === "Enter" && search.trim()) {
      navigate(`/search-result?query=${search}`); // Navigate to SearchResult with query
      setShowSearch(false); // Close search bar after search
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSearch, search]);

  return (
    <>
      {!showSearch && (
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="search-trigger"
          onClick={() => setShowSearch(true)} // Show the search bar when clicked
        />
      )}
      {showSearch && (
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Update search query
              placeholder="Search..."
              type="text"
              className="search-input"
              aria-label="Search"
            />
            <img
              src={assets.search_icon}
              alt="Search Icon"
              className="search-icon"
            />
          </div>
          <img
            onClick={() => setShowSearch(false)} // Close the search bar
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
            aria-label="Close search bar"
          />
        </div>
      )}
    </>
  );
};

export default SearchBar;
