import type { ReactNode } from 'react';

export interface IState {
  goods: IShopItem[];
  loading: boolean;
  order: IOrderItem[];
  isBasketShow: boolean;
  alertName: string;

  setGoods: (data: object) => void;
  handleBasketShow: () => void;
  closeAlert: () => void;
  addToBasket: (item: IOrderItem) => void;
  incQuantity: (id: string) => void;
  decQuantity: (id: string) => void;
  removeFromBasket: (id: string) => void;
}

export interface IShopProviderProps {
  children: ReactNode;
}

type ActionTypes =
  | 'SET_GOODS'
  | 'ADD_TO_BASKET'
  | 'INC_QUANTITY'
  | 'DEC_QUANTITY'
  | 'CLOSE_ALERT'
  | 'REMOVE_FROM_BASKET'
  | 'TOGGLE_BASKET';

// FIXME: refactor payload
export type IAction = {
  type: ActionTypes;
  // eslint-disable-next-line
  payload?: any;
};

export interface IShopItem {
  offerId: string;
  displayName: string;
  displayType: string;
  displayDescription: string;
  price: { regularPrice: string };
  displayAssets: [{ full_background: string }];
  quantity: number;
}

export interface IOrderItem
  extends Pick<IShopItem, 'offerId' | 'displayName' | 'price'> {
  quantity: number;
}
