import React from 'react';
import GoodsItem from '../GoodsItem/GoodsItem';
import type { GoodsListProps } from '../../types/interfaces';

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  if (!goods.length) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => {
        return (
          <GoodsItem
            key={item.offerId}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default GoodsList;
