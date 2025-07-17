import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Headers() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className='container'>
        <div className="grid navbar-grid">
          <div className="logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav>
            <ul className={menuOpen ? 'mobile-nav' : 'nav-links'}>
              <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
              <li><NavLink to="/About" onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
              <li><NavLink to="/Country" onClick={() => setMenuOpen(false)}>COUNTRY</NavLink></li>
              <li><NavLink to="/Contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink></li>
            </ul>

            <div className="ham-menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✖" : "☰"}
            </div>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Headers;
