import React, { useState, useEffect } from 'react';
import photoMe from '../assets/me.png'; // Updated import path
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLightbulb, faPlug } from '@fortawesome/free-solid-svg-icons';

function Welcome() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#0A0025',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: '0 5%',
      position: 'relative',
      overflow: 'hidden',
      width: '100vw',
      boxSizing: 'border-box',
    },
    welcomeHeader: {
      color: 'white',
      fontSize: window.innerWidth >= 1024 ? '2.5em' : '2em',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '1rem',
      marginBottom: '1rem',
      fontFamily: "'Fira Code', monospace",
      background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    mainContent: {
      display: 'flex',
      flexDirection: window.innerWidth >= 1024 ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: '1rem',
      flex: '1',
      maxHeight: 'calc(100vh - 200px)',
      position: 'relative',
    },
    textContainer: {
      color: 'white',
      maxWidth: '700px',
      padding: window.innerWidth >= 1024 ? '20px' : '10px',
      flex: window.innerWidth >= 1024 ? '1 1 50%' : '0 1 auto',
      textAlign: window.innerWidth >= 1024 ? 'left' : 'center',
    },
    animatedText: {
      fontSize: window.innerWidth >= 1024 ? '1.8em' : '1.2em',
      fontWeight: '400',
      lineHeight: '1.4',
      fontFamily: "'Fira Code', monospace",
    },
    imageContainer: {
      flex: window.innerWidth >= 1024 ? '1 1 50%' : '0 1 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: window.innerWidth >= 1024 ? 'auto' : '100%',
      maxWidth: window.innerWidth >= 1024 ? '500px' : '300px',
      margin: '0 auto',
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      opacity: showImage ? 1 : 0,
      transform: showImage ? 'scale(1)' : 'scale(0.9)',
      transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
      aspectRatio: '1/1',
      borderRadius: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.welcomeHeader}>
        <br/>
        Welcome to My Portfolio
        
      </div>
      <div style={styles.mainContent}>
        <div style={styles.textContainer}>
          <div style={styles.animatedText} className="typing-text">
            My name is Moatez Tilouche,<br />
            a full-stack developer with extensive experience in both front-end and back-end development.
          </div>
        </div>
        <div style={styles.imageContainer}>
          <img
            src={photoMe}
            alt="welcome"
            style={styles.image}
          />
        </div>
      </div>
      <div className="quote-container">
        <div className="quote-frame">
          <div className="quote-text">
            "With great power comes great electricity bill"
          </div>
          <div className="quote-icons">
            <FontAwesomeIcon icon={faBolt} className="quote-icon" />
            <FontAwesomeIcon icon={faLightbulb} className="quote-icon" />
            <FontAwesomeIcon icon={faPlug} className="quote-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
