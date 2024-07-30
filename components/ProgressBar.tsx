// components/ProgressBar.tsx

import React from 'react';

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  const containerStyle: React.CSSProperties = {
    background: '#1e293b',
    borderRadius: '50px',
    overflow: 'hidden',
    margin: '0 auto',
    width: '100%',
    height: '30px',
  };

  const fillerStyle: React.CSSProperties = {
    height: '100%',
    width: `${percentage}%`,
    background: 'linear-gradient(to right, #a855f7, #d8b4fe)',
    borderRadius: 'inherit',
    textAlign: 'center',
    transition: 'width 0.5s ease-in-out',
  };

  const labelStyle: React.CSSProperties = {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={fillerStyle}>
        <span style={labelStyle}>{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
