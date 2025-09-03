import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../services/ShopContext';
import { API_URL, API_KEY } from '../services/config';
import Cart from '../components/Cart/Cart';
import Preloader from '../components/Preloader/Preloader';
import ShopList from '../components/GoodsList/ShopList';
import CartList from '../components/CartList/CartList';
import Alert from '../components/Alert/Alert';

const Shop: React.FC = () => {
  const { loading, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          setGoods(data.shop);
        }
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {loading ? <Preloader /> : <ShopList />}
      {isBasketShow ? <CartList /> : null}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
