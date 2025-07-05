import React from 'react';

function ExampleCarouselImage({ background = '#f5f5f5', children, height = '70vh' }) {
  return (
    <div
      style={{
        backgroundColor: background,
        height: height,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children && (
        <div style={{ color: '#333', fontSize: '2rem', fontWeight: 'bold' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export default ExampleCarouselImage;
