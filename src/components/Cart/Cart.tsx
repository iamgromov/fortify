import type { ICartProps } from '../../types/interfaces';
import styles from './Cart.module.scss';

const Cart: React.FC<ICartProps> = ({
  quantity,
  handleBasketShow,
}) => {
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
