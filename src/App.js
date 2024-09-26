// src/App.js
import React, { useRef, useEffect } from 'react';
import './global.css';
import './App.css'; // Spezifische Styles

// Importieren der Bilder aus dem src-Verzeichnis
import HimmelImage from './assets/bilder/himmel.png';
import SignImage from './assets/bilder/Sign.png';
import BodenImage from './assets/bilder/boden.png';
import TeleIcon from './assets/bilder/tele.png';
import XIcon from './assets/bilder/x.png';
import LogoImage from './assets/bilder/Logo.png';
import CharImage from './assets/bilder/CharSolo.png';
import BaumImage from './assets/bilder/baum.png';
import BarImage from './assets/bilder/bar.png';
import RoadImage from './assets/bilder/Road4.png';

// Importiere die TokenProgressLive-Komponente
import TokenProgressLive from './TokenProgressLive';

// Importiere die PresaleButton-Komponente
import PresaleButton from './PresaleButton';

function App() {
  const topRef = useRef(null);
  const roadmapRef = useRef(null); // Referenz für Roadmap
  const tokenomicsRef = useRef(null); // Neue Referenz für Tokenomics
  const animationWrapperRef = useRef(null);

  useEffect(() => {
    if (animationWrapperRef.current) {
      animationWrapperRef.current.classList.add('slide-in');
    }
  }, []);

  // Funktion zum Scrollen zum oberen Abschnitt
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funktion zum Scrollen zum Roadmap-Abschnitt
  const scrollToRoadmap = () => {
    if (roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Funktion zum Scrollen zum Tokenomics-Abschnitt
  const scrollToTokenomics = () => {
    if (tokenomicsRef.current) {
      tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="appContainer" ref={topRef}>
      {/* Animation Wrapper */}
      <div
        ref={animationWrapperRef}
        className="animationWrapper slide-in"
        style={{ position: 'relative', minHeight: '100vh' }} // Setze min-height: 100vh
      >
        {/* TokenProgressLive-Komponente */}
        <TokenProgressLive />

        {/* Schild-Bild */}
        <div className="signImageContainer">
          <img src={SignImage} alt="SIGN" className="signImage" />
        </div>
        {/* Boden-Bild */}
        <div className="bodenImageContainer">
          <img src={BodenImage} alt="Boden" className="bodenImage" />
        </div>
        {/* Soziale Medien Icons */}
        <div className="socialsContainer">
          <a
            href="https://t.me/your_telegram_group_invite_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TeleIcon} alt="Telegram" className="socialIcon" />
          </a>
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={XIcon} alt="X" className="socialIcon" />
          </a>
        </div>
        {/* Textfeld */}
        <p className="textField">
          CHARITY,
          <br />
          DONE RIGHT!
        </p>
      </div>

      {/* Navigations-Buttons */}
      <div className="buttonContainer">
        <img
          src="./assets/bilder/roadmap.png" // Stelle sicher, dass der Pfad korrekt ist
          alt="ROADMAP"
          className="button"
          onClick={scrollToRoadmap}
        />
        <img
          src="./assets/bilder/tokenomics.png"
          alt="TOKENOMICS"
          className="button"
          onClick={scrollToTokenomics} // Füge onClick hinzu
        />
        <img src="./assets/bilder/utility.png" alt="UTILITY" className="button" />
        <img src="./assets/bilder/features.png" alt="FEATURES" className="button" />
        <img src="./assets/bilder/wiki.png" alt="WIKI" className="button" />
        <img src="./assets/bilder/faq.png" alt="FAQ" className="button" />
      </div>

      {/* Logo */}
      <div className="logoContainer" onClick={scrollToTop}>
        <img src={LogoImage} alt="Logo" className="logo" />
      </div>

      {/* Charakterbild */}
      <div className="charImageContainer">
        <img src={CharImage} alt="Char" className="charImage" />
      </div>

      {/* Seitenbilder */}
      <div className="sideImageContainer">
        <img src={BaumImage} alt="Side" className="sideImage" />
      </div>
      <div className="mirroredImageContainer">
        <img
          src={BaumImage}
          alt="Mirrored Side"
          className="mirroredSideImage"
        />
      </div>

      {/* Bar-Bild */}
      <div className="barContainer">
        <img src={BarImage} alt="bar" className="barImage" />
      </div>

      {/* Roadmap Section */}
      <div ref={roadmapRef} className="roadmapSection"> {/* Referenz für Roadmap */}
        {/* Overlay Container */}
        <div className="overlayContainer">
          <img src={RoadImage} alt="Road4" className="overlayImage" />
        </div>
        {/* Zusätzlicher Inhalt */}
        <div className="whiteContainer"></div>
        <p style={{ marginTop: '0vh' }}>.</p>
      </div>

      {/* Tokenomics Section */}
      <div ref={tokenomicsRef} className="tokenomicsSection">

      </div>

      {/* Presale Button Komponente */}
      <PresaleButton />
    </div>
  );
}

export default App;
