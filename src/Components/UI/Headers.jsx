  import React from 'react'
  import{NavLink} from "react-router-dom"

  function Headers() {
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
              <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/About">ABOUT</NavLink></li>
                <li><NavLink to="/Country">COUNTRY</NavLink></li>
                <li><NavLink to="/Contact">CONTACT</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }

  export default Headers