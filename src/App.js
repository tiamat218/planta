import React, { useRef, useEffect } from 'react';
import './global.css';
import './App.css'; // Spezifische Styles

function App() {
  const topRef = useRef(null);
  const contentRef = useRef(null);
  const animationWrapperRef = useRef(null);

  const SCROLL_DURATION = 1000;

  useEffect(() => {
    if (animationWrapperRef.current) {
      const slideInAnimation = `
        @keyframes slideIn {
          from {
            transform: translateY(100vh);
          }
          to {
            transform: translateY(0);
          }
        }
        .slide-in {
          animation: slideIn ${SCROLL_DURATION}ms ease-out forwards;
        }
      `;
      const styleSheet = document.createElement('style');
      styleSheet.type = 'text/css';
      styleSheet.innerText = slideInAnimation;
      document.head.appendChild(styleSheet);

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

  const appContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    backgroundImage: 'url("/bilder/wolken.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="appContainer" ref={topRef} style={appContainerStyle}>
      <div className="whiteContainer"></div>

      <div ref={animationWrapperRef} className="animationWrapper">
        <div className="signImageContainer">
          <img src="/bilder/Sign.png" alt="SIGN" className="signImage" />
        </div>

        <div className="bodenImageContainer">
          <img src="/bilder/boden.png" alt="Boden" className="bodenImage" />
        </div>

        <div className="socialsContainer">
          <a
            href="https://t.me/your_telegram_group_invite_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bilder/tele.png" alt="Telegram" className="socialIcon" />
          </a>
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bilder/x.png" alt="X" className="socialIcon" />
          </a>
        </div>

        <p className="textField">
          CHARITY,
          <br />
          DONE RIGHT!
        </p>
      </div>

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

      <div className="logoContainer" onClick={scrollToTop}>
        <img src="/bilder/Logo.png" alt="Logo" className="logo" />
      </div>

      <div className="charImageContainer">
        <img src="/bilder/CharSolo.png" alt="Char" className="charImage" />
      </div>

      <div className="sideImageContainer">
        <img src="/bilder/baum.png" alt="Side" className="sideImage" />
      </div>

      <div className="mirroredImageContainer">
        <img
          src="/bilder/baum.png"
          alt="Mirrored Side"
          className="mirroredSideImage"
        />
      </div>

      <div className="barContainer">
        <img src="/bilder/bar.png" alt="bar" className="barImage" />
      </div>

      <div ref={contentRef} className="content">
        <div className="overlayContainer">
          <div className="whiteContainer"></div>
          <img src="/bilder/Road4.png" alt="Road4" className="overlayImage" />
        </div>
        <div className="whiteContainer"></div>
        <p style={{ marginTop: '0vh' }}>.</p>
      </div>
    </div>
  );
}

export default App;
