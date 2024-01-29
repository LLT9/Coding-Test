import React, { useState, useRef, useEffect } from "react";
import "./AppHeader.css";

const AppHeader = ({ onSearch }) => {
  const [searchActive, setSearchActive] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setSearchActive((prev) => !prev);
  };
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Click Outside Handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]); // Add searchRef to the dependency array

  return (
    <header className="app-header">
      <h1 className="app-title">Whatsapp</h1>
      <div className="header-right-container">
        <div
          className={`outer-bubble ${searchActive ? "active" : ""}`}
          ref={searchRef}
        >
          <div className="bubble">
            <input
              type="text"
              className={`search-input ${searchActive ? "active" : ""}`}
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
              style={{ display: searchActive ? "block" : "none" }}
            />
            <button
              aria-label="Toggle search"
              className="search-btn"
              onClick={toggleSearch}
            >
              <svg
                aria-hidden="true"
                className="s-input-icon s-input-icon__search svg-icon iconSearch search-icon" // Added the search-icon class here
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7 a5 5 0 0 1 10 0Z"
                  fill="#c1c1c1"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <button className="menu-btn" onClick={toggleMenu}>⋮</button>
        {menuVisible && (
          <div className="popup-menu">
            <button className="menu-item">Settings</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;

<svg
  aria-hidden="true"
  className="s-input-icon s-input-icon__search svg-icon iconSearch search-icon" // Added the search-icon class here
  width="18"
  height="18"
  viewBox="0 0 18 18"
>
  <path
    d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7 a5 5 0 0 1 10 0Z"
    fill="#c1c1c1"
  ></path>
</svg>;
