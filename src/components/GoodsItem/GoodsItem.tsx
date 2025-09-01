import React from 'react';
import type { IGood } from '../../types/interfaces';

// import styles from './GoodsItem.module.scss'

const GoodsItem: React.FC<IGood> = ({
  offerId,
  displayName,
  displayType,
  displayDescription,
  price,
  displayAssets,
}) => {
  return (
    <div
      id={offerId}
      className='item card cyan darken-3'
    >
      <div className='card-image'>
        <img
          alt={`${displayName} poster`}
          src={displayAssets[0]?.full_background}
        />
      </div>
      <div className='card-content white-text'>
        <div className='title-wrapper'>
          <p>{displayType.toUpperCase()}</p>
          <span className='card-title'>{displayName}</span>
          {/* <span className={styles.title}>{displayName}</span> */}
        </div>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button className='btn'>Купить</button>
        <span
          style={{ color: 'white', fontSize: '1.5rem' }}
          className='right'
        >
          {price.regularPrice}
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
