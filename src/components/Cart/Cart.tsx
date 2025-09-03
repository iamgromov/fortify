import { useContext } from 'react';
import { ShopContext } from '../../services/ShopContext';

import styles from './Cart.module.scss';

const Cart: React.FC = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  const quantity = order.length;

  return (
    <div
      className={styles.cart}
      onClick={handleBasketShow}
    >
      <i className='material-icons white-text'>shopping_cart</i>
      {quantity ? <span className={styles.quantity}>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
