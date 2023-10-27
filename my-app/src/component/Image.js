import React from 'react';

const Image = (y) => {
  return (
      <div>
        <h3 className="card-title text-center">{y.heading}</h3>
      <div className="card" style={{width: '18rem'}}>
        <img src={y.src} height="250px" className="card-img-top" alt={y.alt} />
        <div className="card-body">
          <p className="card-text">{y.description}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Image;
 