import React from 'react';

const Spinner = () => {
  const styles = {
    spinnerOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(10, 0, 37, 0.9)', // Matching your theme color with transparency
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '3px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      borderTop: '3px solid #4ECDC4', // Using your theme color
      animation: 'spin 1s linear infinite',
    },
  };

  return (
    <div style={styles.spinnerOverlay}>
      <div style={styles.spinner} />
    </div>
  );
};

export default Spinner; 