import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {

  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
          <p>{showInfo ? info : `${info.substring(0,200)}...`}
            <button onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? 'hide' : 'show'}
            </button>
          </p>
          <button className='delete-btn'>Not Interested</button>
        </div>
      </footer>
    </article>
  )
};

export default Tour;
