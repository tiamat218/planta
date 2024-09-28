// src/App.js
import React, { useRef, useEffect, useState } from 'react';
import './global.css';
import './App.css'; // Spezifische Styles

// Importieren der Bilder aus dem src-Verzeichnis
import HimmelImage from './assets/bilder/Himmel2.jpg';
import SignImage from './assets/bilder/Sign.png';
import BodenImage from './assets/bilder/boden.png';
import TeleIcon from './assets/bilder/teleBV.png';
import XIcon from './assets/bilder/xB.png';
import LogoImage from './assets/bilder/Logo.png';
import CharImage from './assets/bilder/CharSolo.png';
import BaumImage from './assets/bilder/baum.png';
import BarImage from './assets/bilder/bar.png';
import RoadImage from './assets/bilder/Road4.png';
import navBarBG from './assets/bilder/navBarBG.png';

// Importiere das Hintergrundbild für die sozialen Medien
import buttonBackground from './assets/bilder/kleinebox.png';

// Importiere die TokenProgressLive-Komponente
import TokenProgressLive from './TokenProgressLive';

// Importiere die PresaleButton-Komponente
import PresaleButton from './PresaleButton';

function App() {
  const topRef = useRef(null);
  const roadmapRef = useRef(null); // Referenz für Roadmap
  const tokenomicsRef = useRef(null); // Neue Referenz für Tokenomics
  const animationWrapperRef = useRef(null);

  const [isNavOpen, setIsNavOpen] = useState(false); // Zustand für die Navbar

  useEffect(() => {
    if (animationWrapperRef.current) {
      animationWrapperRef.current.classList.add('slide-in');
    }
  }, []);

  // Funktion zum Scrollen zum oberen Abschnitt
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false); // Schließe das Menü nach dem Scrollen
    }
  };

  // Funktion zum Scrollen zum Roadmap-Abschnitt
  const scrollToRoadmap = () => {
    if (roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false); // Schließe das Menü nach dem Scrollen
    }
  };

  // Funktion zum Scrollen zum Tokenomics-Abschnitt
  const scrollToTokenomics = () => {
    if (tokenomicsRef.current) {
      tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsNavOpen(false); // Schließe das Menü nach dem Scrollen
    }
  };

  // Funktion zum Toggle der Navbar
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="appContainer" ref={topRef}>
      {/* Navbar */}
      <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
        {/* Hamburger Menü Button (nur sichtbar auf mobilen Geräten) */}
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

        {/* Vertikale Navbar Buttons */}
        <div className="buttonContainer">
          {/* Logo */}
          <div
            className="logoContainer"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToTop();
              }
            }}
          >
            <img src={LogoImage} alt="Logo" className="logo" />
          </div>

          {/* Navigationsbuttons */}
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            onClick={scrollToRoadmap}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToRoadmap();
              }
            }}
          >
            ROADMAP
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            onClick={scrollToTokenomics}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToTokenomics();
              }
            }}
          >
            TOKENOMICS
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            role="button"
            tabIndex={0}
            onClick={() => setIsNavOpen(false)} // Optional: Schließe das Menü
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsNavOpen(false);
              }
            }}
          >
            UTILITY
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            role="button"
            tabIndex={0}
            onClick={() => setIsNavOpen(false)} // Optional: Schließe das Menü
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsNavOpen(false);
              }
            }}
          >
            FEATURES
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            role="button"
            tabIndex={0}
            onClick={() => setIsNavOpen(false)} // Optional: Schließe das Menü
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsNavOpen(false);
              }
            }}
          >
            WIKI
          </div>
          <div
            className="navButton"
            style={{ backgroundImage: `url(${navBarBG})` }}
            role="button"
            tabIndex={0}
            onClick={() => setIsNavOpen(false)} // Optional: Schließe das Menü
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsNavOpen(false);
              }
            }}
          >
            FAQ
          </div>
        </div>
      </div>

      {/* Side Image (Baum als Hintergrund für die Navbar) - nur Desktop */}
      <div className="sideImageContainer">
        <img src={BaumImage} alt="Side" className="sideImage" />
      </div>

      {/* Animation Wrapper */}
      <div
        ref={animationWrapperRef}
        className="animationWrapper slide-in"
        style={{ position: 'relative', minHeight: '100vh' }}
      >
        {/* TokenProgressLive-Komponente */}
        <TokenProgressLive />

        {/*
        <div className="listingOverlay">
          <div className="ListingBox">
            <img src={ListingBox} className="ListingBoxImage" alt="Listing" />
            <p className="ListingText">COMING SOON...</p>
          </div>
          ...
        </div>
        */}

        {/* Schild-Bild */}
        <div className="signImageContainer">
          <img src={SignImage} alt="SIGN" className="signImage" />
        </div>

        {/* Boden-Bild */}
        <div className="bodenImageContainer">
          <img src={BodenImage} alt="Boden" className="bodenImage" />
        </div>

        {/* Soziale Medien Icons mit Hintergrund */}
        <div className="socialsContainer">
          {/* X Logo mit Hintergrund */}
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label="Twitter"
          >
            <div className="iconWrapper">
              <img src={buttonBackground} alt="Hintergrund" className="buttonBG" />
              <img src={XIcon} alt="X" className="socialIcon" />
            </div>
          </a>

          {/* Telegram Logo mit Hintergrund */}
          <a
            href="https://t.me/your_telegram_group_invite_link"
            target="_blank"
            rel="noopener noreferrer"
            className="socialLink"
            aria-label="Telegram"
          >
            <div className="iconWrapper">
              <img src={buttonBackground} alt="Hintergrund" className="buttonBG2" />
              <img src={TeleIcon} alt="Telegram" className="socialIcon" />
            </div>
          </a>
        </div>

        {/* Textfeld */}
        <p className="textField">
          CHARITY,
          <br />
          DONE RIGHT!
        </p>
      </div>

      {/* Presale Button Komponente außerhalb des Animation Wrappers */}
      <PresaleButton />

      {/* Charakterbild */}
      <div className="charImageContainer">
        <img src={CharImage} alt="Char" className="charImage" />
      </div>

      {/* Mirrored Side Image */}
      <div className="mirroredImageContainer">
        <img src={BaumImage} alt="Mirrored Side" className="mirroredSideImage" />
      </div>

      {/* Bar-Bild */}
      <div className="barContainer">
        <img src={BarImage} alt="bar" className="barImage" />
      </div>

      {/* Roadmap Section */}
      <div ref={roadmapRef} className="roadmapSection">
        <div className="overlayContainer">
          <img src={RoadImage} alt="Road4" className="overlayImage" />
        </div>
        <div className="whiteContainer"></div>
        <p style={{ marginTop: '0vh' }}>.</p>
      </div>

      {/* Tokenomics Section */}
      <div ref={tokenomicsRef} className="tokenomicsSection"></div>
    </div>
  );
}

export default App;
