import { useContext } from 'react';
import { ShopContext } from '../../services/ShopContext';
import ShopItem from '../GoodsItem/ShopItem';

const ShopList: React.FC = () => {
  const { goods = [] } = useContext(ShopContext);

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
          />
        );
      })}
    </div>
  );
};

export default ShopList;
