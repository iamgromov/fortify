import React from 'react';
import ShopItem from '../GoodsItem/ShopItem';
import type { IShopListProps } from '../../types/interfaces';

const ShopList: React.FC<IShopListProps> = ({ goods, addToBasket }) => {
  if (!goods.length) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => {
        return (
          <ShopItem
            key={item.offerId}
            {...item}
            addToBasket={addToBasket}
          />
        );
      })}
    </div>
  );
};

export default ShopList;
