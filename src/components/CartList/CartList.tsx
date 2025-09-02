import type { ICartListProps } from '../../types/interfaces';
import CartItem from '../CartItem/CartItem';
// import styles from './CartList.module.scss';

const CartList: React.FC<ICartListProps> = ({
  order,
  handleBasketShow,
  removeFromBasket,
  decQuantity,
  incQuantity,
}) => {
  const totalPrice: number = order.reduce((sum, el) => {
    return sum + +el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className='collection collection-list'>
      <li className='collection-item active'>Cart</li>
      {order.length ? (
        order.map((item) => {
          return (
            <CartItem
              key={item.offerId}
              {...item}
              removeFromBasket={removeFromBasket}
              decQuantity={decQuantity}
              incQuantity={incQuantity}
            />
          );
        })
      ) : (
        <li className='collection-item'>Empty</li>
      )}
      <li className='collection-item active'>To Order: {totalPrice} </li>
      <li className='collection-item'>
        <button className='btn btn-small'>BUY</button>
      </li>
      <i
        className='material-icons'
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          cursor: 'pointer',
        }}
        onClick={handleBasketShow}
      >
        close
      </i>
    </ul>
  );
};

export default CartList;
