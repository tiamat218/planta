import React, { useRef } from 'react';
import './global.css';
import './App.css';

import BaumImage from './assets/bilder/baum.png';
import navBarBG from './assets/bilder/navBarBG.png';
import LogoImage from './assets/bilder/Logo.png';
import XneuImage from './assets/bilder/Xneu.png'; // X Button Image
import TELEneuImage from './assets/bilder/TeleNEU.png'; // Telegram Button Image

import Sektor1Image from './assets/bilder/Toppage.webp';
import Sektor2Image from './assets/bilder/Liane.png';
import Sektor3Image from './assets/bilder/Roadmap Neu.webp';
import Sektor4Image from './assets/bilder/Pie.png';
import CharImage from './assets/bilder/Char.webp';

function App() {
  const sectorRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const scrollToSector = (index) => {
    if (sectorRefs[index].current) {
      sectorRefs[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="appContainer">
      {/* Navbar für größere Bildschirme */}
      <div className="navbar">
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

      {/* Mobile Logo oben links */}
      <div
        className="mobileLogoContainer"
        onClick={() => scrollToSector(0)}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToSector(0);
          }
        }}
      >
        <img src={LogoImage} alt="Logo" className="mobileLogo" />
      </div>

      {/* Desktop Button Container - oben rechts */}
      <div className="desktopButtonContainer">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={XneuImage} alt="X Button" className="desktopButton" />
        </a>
        <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
          <img src={TELEneuImage} alt="Telegram Button" className="desktopButton" />
        </a>
      </div>

      {/* Mobile Button Container - oben rechts */}
      <div className="mobileButtonContainer">
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={XneuImage} alt="X Button" className="mobileButton" />
        </a>
        <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
          <img src={TELEneuImage} alt="Telegram Button" className="mobileButton" />
        </a>
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
        <div ref={sectorRefs[0]} className="section sector1Container">
          <img src={Sektor1Image} alt="Sektor 1" className="sectorImage" />
          <img src={CharImage} alt="Char" className="charImage" />
        </div>
        <div ref={sectorRefs[1]} className="section">
          <img src={Sektor2Image} alt="Sektor 2" className="sectorImage" />
        </div>
        <div ref={sectorRefs[2]} className="section">
          <img src={Sektor3Image} alt="Sektor 3" className="sectorImage" />
        </div>
        <div ref={sectorRefs[3]} className="section">
          <img src={Sektor4Image} alt="Sektor 4" className="sectorImage" />
        </div>
      </div>
    </div>
  );
}

export default App;
