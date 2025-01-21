import React from 'react';

function NewCollection() {
  const pageStyle = {
    backgroundColor: '#4E342E',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px'

  };

  const cardStyleBase = {
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    textAlign: 'center',
    minHeight: '450px',
    width: '600px',
    
    
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s'
  };

  const cardLeftStyle = {
    ...cardStyleBase,
    background: 'radial-gradient(circle, #5D4037, #3E2723)',
  };

  const cardMiddleStyle = {
    ...cardStyleBase,
    background: 'radial-gradient(circle, #dfc4a6, #b09b83)',
  };

  const cardRightStyle = {
    ...cardStyleBase,
    background: 'radial-gradient(circle, #dfc4a6, #b09b83)',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '345px',
    borderRadius: '5px',
    transition: 'transform 0.3s',
  };

  const hoverImageStyle = {
    transform: 'scale(1.1)',
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.6)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={pageStyle}>
      <h1>Our New Collection</h1>
      <div style={cardContainerStyle}>
        <div style={cardMiddleStyle}>
          <h2 style={{color: "brown"}}>Bistro Reseerve</h2>
          <img
            src="/images/bistro-reserve.png"
            alt=""
            style={imageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div style={cardMiddleStyle}>
          <h2 style={{color: "brown"}}>Nitro Fost Brew</h2>
          <img
            src="/images/nitro-frost-brew.png"
            alt=""
            style={imageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div style={cardRightStyle}>
          <h2 style={{color: "brown"}}>Vanila Cloudburst</h2>
          <img
            src="/images/vanila-cloudburst.png"
            alt=""
            style={imageStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
