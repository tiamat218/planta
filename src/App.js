import React, { useRef, useState } from 'react';
import './global.css';
import './App.css';

import BaumImage from './assets/bilder/baum.png'; // Seitenbilder
import navBarBG from './assets/bilder/navBarBG.png'; // Hintergrund für Navbar-Buttons
import LogoImage from './assets/bilder/Logo.png'; // Logo

// Platzhalterbilder für die Sektoren
import Sektor1Image from './assets/bilder/Toppage.webp';
import Sektor2Image from './assets/bilder/Liane.png';
import Sektor3Image from './assets/bilder/RoadZeichen.webp';
import Sektor4Image from './assets/bilder/Pie.png';

function App() {
  const sectorRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)]; // Referenzen für die Sektoren

  const [isNavOpen, setIsNavOpen] = useState(false);

  // Funktionen zum Scrollen zu den Sektoren
  const scrollToSector = (index) => {
    if (sectorRefs[index].current) {
      sectorRefs[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      setIsNavOpen(false);
    }
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="appContainer">
      {/* Navbar */}
      <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
        {/* Hamburger Menü Button (nur mobil) */}
        <div
          className="hamburgerButton"
          onClick={toggleNavbar}
          aria-label="Navigation umschalten"
          aria-expanded={isNavOpen}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleNavbar();
            }
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navbar Buttons */}
        <div className="buttonContainer">
          {/* Logo */}
          <div
            className="logoContainer"
            onClick={() => scrollToSector(0)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSector(0);
              }
            }}
          >
            <img src={LogoImage} alt="Logo" className="logo" />
          </div>

          {/* Navigationsbuttons */}
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            onClick={() => scrollToSector(1)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSector(1);
              }
            }}
          >
            HOW TO BUY
          </div>


          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            onClick={() => scrollToSector(2)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSector(2);
              }
            }}
          >
            ROADMAP
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            onClick={() => scrollToSector(3)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToSector(3);
              }
            }}
          >
            TOKENOMICS
          </div>
        </div>
      </div>

      {/* Seitenbilder */}
      <div className="sideImageContainer">
        <img src={BaumImage} alt="Seitenbild" className="sideImage" />
      </div>
      <div className="mirroredImageContainer">
        <img src={BaumImage} alt="Gespiegeltes Seitenbild" className="mirroredSideImage" />
      </div>

      {/* Sektoren */}
      <div className="sectionsContainer">
        {/* Sektor 1 */}
        <div ref={sectorRefs[0]} className="section">
          <img src={Sektor1Image} alt="Sektor 1" className="sectorImage" />
        </div>
        {/* Sektor 2 */}
        <div ref={sectorRefs[1]} className="section">
          <img src={Sektor2Image} alt="Sektor 2" className="sectorImage" />
        </div>
        {/* Sektor 3 */}
        <div ref={sectorRefs[2]} className="section">
        <img src={Sektor3Image} alt="Sektor 3" className="sectorImage" />
        </div>
        {/* Sektor 3 */}
        <div ref={sectorRefs[3]} className="section">
        <img src={Sektor4Image} alt="Sektor 4" className="sectorImage" />
        </div>
      </div>
    </div>
  );
}

export default App;
