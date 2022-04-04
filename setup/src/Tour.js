import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  return (
    <article>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>{price}</h4>
          <p>{info}</p>
          <button className='delete-btn'>Not Interested</button>
        </div>
      </footer>
    </article>
  )
};

export default Tour;
