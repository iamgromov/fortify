import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../services/config';
import type { IOrderItem, IShopItem } from '../types/interfaces';
import Preloader from '../components/Preloader/Preloader';
import ShopList from '../components/GoodsList/ShopList';
import Cart from '../components/Cart/Cart';
import CartList from '../components/CartList/CartList';
import Alert from '../components/Alert/Alert';

const Shop: React.FC = () => {
  const [goods, setGoods] = useState<IShopItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<IOrderItem[]>([]);
  const [isBasketShow, setIsBasketShow] = useState<boolean>(false);
  const [alertName, setAlertName] = useState<string>('');

  const addToBasket = (item: IOrderItem) => {
    const itemIndex = order.findIndex((elem) => elem.offerId == item.offerId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index == itemIndex) {
          return {
            ...item,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }

    setAlertName(item.displayName);
  };

  const removeFromBasket = (id: string) => {
    const newOrder = order.filter((el) => el.offerId !== id);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  const decQuantity = (id: string) => {
    const newOrder = order.map((el) => {
      if (el.offerId == id) {
        return {
          ...el,
          quantity: el.quantity == 0 ? 0 : el.quantity - 1,
        };
      }

      return el;
    });

    setOrder(newOrder);
  };

  const incQuantity = (id: string) => {
    const newOrder = order.map((el) => {
      if (el.offerId == id) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      }
      return el;
    });
    setOrder(newOrder);
  };

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          setGoods(data.shop);
          setLoading(false);
        }
      });
  }, []);

  return (
    <main className='container content'>
      <Cart
        quantity={order.length}
        handleBasketShow={handleBasketShow}
      />
      {loading ? (
        <Preloader />
      ) : (
        <ShopList
          goods={goods}
          addToBasket={addToBasket}
        />
      )}
      {isBasketShow ? (
        <CartList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          decQuantity={decQuantity}
          incQuantity={incQuantity}
        />
      ) : null}
      {alertName && (
        <Alert
          name={alertName}
          closeAlert={closeAlert}
        />
      )}
    </main>
  );
};

export default Shop;
