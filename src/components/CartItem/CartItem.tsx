import { useContext } from 'react';
import { ShopContext } from '../../services/ShopContext';
import type { IOrderItem } from '../../types/interfaces';

const CartItem: React.FC<IOrderItem> = ({
  offerId,
  displayName,
  price,
  quantity,
}) => {
  const { incQuantity, decQuantity, removeFromBasket } =
    useContext(ShopContext);

  return (
    <li className='collection-item'>
      {displayName}{' '}
      <i
        className='material-icons basket-quantity'
        style={{
          cursor: 'pointer',
          verticalAlign: 'middle',
        }}
        onClick={() =>
          quantity == 1 ? removeFromBasket(offerId) : decQuantity(offerId)
        }
      >
        remove
      </i>{' '}
      x{quantity}{' '}
      <i
        className='material-icons basket-quantity'
        style={{
          cursor: 'pointer',
          verticalAlign: 'middle',
        }}
        onClick={() => incQuantity(offerId)}
      >
        add
      </i>{' '}
      = {+price.regularPrice * quantity}
      <span
        className='secondary-content'
        onClick={() => {
          removeFromBasket(offerId);
        }}
      >
        <i
          className='material-icons'
          style={{
            cursor: 'pointer',
          }}
        >
          clear
        </i>
      </span>
    </li>
  );
};

export default CartItem;
