import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  const styles = {
    wrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: isLoading ? 0 : 1,
      transition: 'opacity 0.3s ease-in-out',
    },
    shimmer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 100%)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 1.5s infinite',
      display: isLoading ? 'block' : 'none',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.shimmer} />
      <img
        src={src}
        alt={alt}
        className={className}
        style={styles.image}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageLoader; 