import { useReducer } from 'react';
import { ShopContext } from './ShopContext';
import { reducer } from './reducer';
import { initialState } from './initialState';
import type { IShopProviderProps } from '../types/interfaces';

export const ShopProvider: React.FC<IShopProviderProps> = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: { data } });
  };

  value.handleBasketShow = () => {
    dispatch({ type: 'TOGGLE_BASKET' });
  };

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.addToBasket = (orderItem) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { orderItem } });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INC_QUANTITY', payload: { itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DEC_QUANTITY', payload: { itemId } });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { itemId } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
