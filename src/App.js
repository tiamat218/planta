import React, { useRef, useEffect } from 'react';
import VantaClouds from './VantaClouds';
import './global.css';

function App() {
  const topRef = useRef(null);
  const contentRef = useRef(null);
  
  const SCROLL_DURATION = 1000;

  useEffect(() => {
    const animationWrapper = document.getElementById('animationWrapper');
    if (animationWrapper) {
      const slideInAnimation = `
        @keyframes slideIn {
          from {
            transform: translateY(100vh);
          }
          to {
            transform: translateY(0);
          }
        }
        #animationWrapper.slide-in {
          animation: slideIn ${SCROLL_DURATION}ms ease-out forwards;
        }
      `;
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = slideInAnimation;
      document.head.appendChild(styleSheet);

      animationWrapper.classList.add('slide-in');
    }
  }, [SCROLL_DURATION]);

  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
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
    <div style={styles.appContainer} ref={topRef}>
      <div style={styles.vantaContainer}>
        <VantaClouds />
      </div>

      <div id="animationWrapper" style={styles.animationWrapper}>
        <div style={styles.signImageContainer}>
          <img src="/bilder/SIGN.png" alt="SIGN" style={styles.signImage} />
        </div>

        <div style={styles.bodenImageContainer}>
          <img src="/bilder/boden.png" alt="Boden" style={styles.bodenImage} />
        </div>

        <div style={styles.socialsContainer}>
          <a
            href="https://t.me/your_telegram_group_invite_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bilder/tele.png" alt="Telegram" style={styles.socialIcon} />
          </a>
          <a
            href="https://twitter.com/your_twitter_handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/bilder/x.png" alt="X" style={styles.socialIcon} />
          </a>
        </div>

        <p style={styles.textField}>
          CHARITY,<br />
          DONE RIGHT!
        </p>
      </div>

      <div style={styles.buttonContainer}>
        <img src="" alt="ROADMAP" style={styles.button} onClick={scrollToContent} />
        <img src="" alt="TOKENOMICS" style={styles.button} />
        <img src="" alt="UTILITY" style={styles.button} />
        <img src="" alt="FEATURES" style={styles.button} />
        <img src="" alt="WIKI" style={styles.button} />
        <img src="" alt="FAQ" style={styles.button} />
      </div>

      <div style={styles.logoContainer} onClick={scrollToTop}>
        <img src="/bilder/logo.png" alt="Logo" style={styles.logo} />
      </div>

      <div style={styles.charImageContainer}>
        <img src="/bilder/CharSolo.png" alt="Char" style={styles.charImage} />
      </div>

      <div style={styles.sideImageContainer}>
        <img src="/bilder/baum.png" alt="Side" style={styles.sideImage} />
      </div>

      <div style={styles.mirroredImageContainer}>
        <img src="/bilder/baum.png" alt="Mirrored Side" style={styles.mirroredSideImage} />
      </div>

      <div style={styles.barContainer}>
        <img src="/bilder/bar.png" alt="bar" style={styles.barImage} />
      </div>

      <div ref={contentRef} style={styles.content}>
        <div style={styles.overlayContainer}>
          <div style={styles.vantaCloudsContainer}>
            <div style={styles.vantaCloudsFlipped}>
              <VantaClouds />
            </div>
          </div>
          <img src="/bilder/Road4.png" alt="Road4" style={styles.overlayImage} />
        </div>
        <div style={styles.vantaContainerFlipped}>
          <div style={styles.vantaCloudsFlipped}>
            <VantaClouds />
          </div>
        </div>
        <p style={{ marginTop: '100vh' }}>.</p>
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },
  vantaContainer: {
    height: '100vh',
    position: 'relative',
  },
  vantaContainerFlipped: {
    height: '100vh',
    position: 'relative',
    zIndex: -3,
  },
  vantaCloudsFlipped: {
    height: '100%',
    width: '100%',
    transform: 'scaleY(-1)', // Flip the clouds
  },
  animationWrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    zIndex: 5,
    transform: 'translateY(100vh)',
  },
  bodenImageContainer: {
    position: 'absolute',
    top: '45vh',
    left: '15%',
    width: '70%',
    zIndex: 5,
    pointerEvents: 'none',
  },
  bodenImage: {
    width: '100%',
    height: 'auto',
  },
  barContainer: {
    position: 'absolute',
    top: '90vh',
    left: '5%',
    width: '90vw',
    zIndex: 6,
    pointerEvents: 'none',
  },
  barImage: {
    width: '100%',
    height: 'auto',
  },
  buttonContainer: {
    position: 'fixed',
    top: '21vh',
    left: '1vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '7vh',
    zIndex: 9,
  },
  button: {
    width: '10vw',
    height: 'auto',
    cursor: 'pointer',
  },
  logoContainer: {
    position: 'fixed',
    top: '1vh',
    left: '0.2vw',
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    zIndex: 9,
    cursor: 'pointer',
  },
  logo: {
    width: '6vw',
    height: 'auto',
  },
  socialsContainer: {
    position: 'absolute',
    top: '19vh',
    right: '17vw',
    display: 'flex',
    flexDirection: 'row',
    gap: '1vw',
    zIndex: 6,
  },
  socialIcon: {
    width: '4vw',
    height: 'auto',
    cursor: 'pointer',
  },
  signImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    top: '10vh',
    width: '100%',
    zIndex: 2,
    padding: '5vh 0',
  },
  signImage: {
    width: '80vw',
    maxHeight: '90vh',
  },
  charImageContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: '55%',
    top: '30vh',
    width: '50%',
    zIndex: 7,
    padding: '2vh 0',
  },
  charImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  sideImageContainer: {
    position: 'fixed',
    top: '0vh',
    left: '-8vw',
    height: '110vh',
    zIndex: 7,
  },
  sideImage: {
    height: '100%',
    width: 'auto',
  },
  mirroredImageContainer: {
    position: 'fixed',
    top: '0vh',
    right: '-8vw',
    height: '110vh',
    zIndex: 7,
    transform: 'scaleX(-1)',
  },
  mirroredSideImage: {
    height: '100%',
    width: 'auto',
  },
  textField: {
    position: 'absolute',
    top: '9vh',
    left: '16%',
    width: '60%',
    zIndex: 6,
    fontSize: '4rem',
    color: 'white',
    transform: 'rotate(-5deg)',
    animation: 'gentleScale 0.8s ease-in-out infinite',
  },
  content: {
    padding: '2vh 5vw',
    backgroundColor: '#fff',
    color: '#333',
    zIndex: 2,
    minHeight: '100vh',
  },
  overlayContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    zIndex: 2,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  vantaCloudsContainer: {
    position: 'absolute',
    top: -500,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  overlayImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 2,
  },
};

export default App;
