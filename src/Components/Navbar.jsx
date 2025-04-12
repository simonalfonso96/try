import React, { useState } from 'react';
import "../Style/style.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <nav className='container'>
      <h2 className="logo">AnimeBinge</h2>
      <div className="nav__toggle" onClick={handleToggle}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="2xl" />
      </div>
      <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
        <ul>
          <li>
            <Link >Home</Link>
          </li>
          <li>
            <Link >Animes</Link>
          </li>
          <li>
            <Link >Mangas</Link>
          </li>
          <li>
            <Link >News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
