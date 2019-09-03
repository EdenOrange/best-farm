import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingScreen = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  };
  const iconStyle = {
    position: 'absolute',
    top: '50%',
    trasnform: 'translateY(-50%)',
  };

  return (
    <div style={containerStyle}>
      <FontAwesomeIcon icon="spinner" className="icon" size="3x" spin style={iconStyle} />
    </div>
  );
};

export default LoadingScreen;
