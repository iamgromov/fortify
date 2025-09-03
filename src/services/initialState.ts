import type { IState } from "../types/interfaces";

export const initialState: IState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',

  setGoods: () => {},

  handleBasketShow: () => {},
  closeAlert: () => {},

  addToBasket: () => {},

  incQuantity: () => {},
  decQuantity: () => {},
  removeFromBasket: () => {},
};