import React, { useEffect, useState } from 'react';
import { API_URL, API_KEY } from '../services/config';
import type { IGood } from '../types/interfaces';
import Preloader from '../components/Preloader/Preloader';
import GoodsList from '../components/GoodsList/GoodsList';

const Shop: React.FC = () => {
  const [goods, setGoods] = useState<IGood[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};

export default Shop;
