import React, { useState } from 'react';

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

  const [readMore, setReadMore] = useState([false, false, false]);

  const handleToggle = (index) => {
    setReadMore((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const descriptions = [
    "Bistro Reserve is a premium coffee blend known for its rich aroma and full-bodied flavor, crafted from the finest beans... Click to read more.",
    "Nitro Frost View delivers a unique cold brew experience with a smooth finish and bold flavors infused with nitrogen... Click to read more.",
    "Vanilla Cloudburst Coffee offers a delightful balance of smooth vanilla notes and a velvety texture in every sip... Click to read more.",
  ];

  const fullDescriptions = [
    "Bistro Reserve is a premium coffee blend known for its rich aroma and full-bodied flavor, crafted from the finest beans in select regions.",
    "Nitro Frost View delivers a unique cold brew experience with a smooth finish and bold flavors infused with nitrogen for a velvety texture.",
    "Vanilla Cloudburst Coffee offers a delightful balance of smooth vanilla notes, a velvety texture, and a satisfying aroma to elevate your coffee experience.",
  ];

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
          <p onClick={() => handleToggle(0)} style={{color: "brown"}}>
            {readMore[0] ? fullDescriptions[0] : descriptions[0]}
          </p>
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
          <p onClick={() => handleToggle(1)} style={{color:"brown"}}>
            {readMore[1] ? fullDescriptions[1] : descriptions[1]}
          </p>
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
          <p onClick={() => handleToggle(2)} style={{color:"brown"}}>
            {readMore[2] ? fullDescriptions[2] : descriptions[2]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
