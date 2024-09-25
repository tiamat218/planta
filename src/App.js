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

function App() {
  const topRef = useRef(null);
  const contentRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const SCROLL_DURATION = 1000;

  useEffect(() => {
    if (animationWrapperRef.current) {
      animationWrapperRef.current.classList.add('slide-in');
    }
  }, []);

  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(
        timeElapsed,
        startPosition,
        distance,
        duration
      );
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const scrollToContent = () => {
    if (contentRef.current) {
      const targetPosition = contentRef.current.offsetTop;
      smoothScrollTo(targetPosition, SCROLL_DURATION);
    }
  };

  const scrollToTop = () => {
    smoothScrollTo(0, SCROLL_DURATION);
  };

  return (
    <div className="appContainer" ref={topRef}>
      <div ref={animationWrapperRef} className="animationWrapper slide-in">
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
      {/* Buttons */}
      <div className="buttonContainer">
        <img
          src=""
          alt="ROADMAP"
          className="button"
          onClick={scrollToContent}
        />
        <img src="" alt="TOKENOMICS" className="button" />
        <img src="" alt="UTILITY" className="button" />
        <img src="" alt="FEATURES" className="button" />
        <img src="" alt="WIKI" className="button" />
        <img src="" alt="FAQ" className="button" />
      </div>
      {/* Logo */}
      <div className="logoContainer" onClick={scrollToTop}>
        <img src={LogoImage} alt="Logo" className="logo" />
      </div>
      {/* Charakter-Bild */}
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
      {/* Inhaltsbereich */}
      <div ref={contentRef} className="content">
        {/* Overlay Container */}
        <div className="overlayContainer">
          <img src={RoadImage} alt="Road4" className="overlayImage" />
        </div>
        {/* Zusätzlicher Inhalt */}
        <div className="whiteContainer"></div>
        <p style={{ marginTop: '0vh' }}>.</p>
      </div>
    </div>
  );
}

export default App;
