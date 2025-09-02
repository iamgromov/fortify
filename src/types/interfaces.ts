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
export interface IShopListProps {
  goods: IShopItem[];
  addToBasket: (good: IOrderItem) => void;
}
export interface IShopItemProps extends IShopItem {
  addToBasket: (good: IOrderItem) => void;
}

export interface ICartProps {
  quantity: number;
  handleBasketShow: () => void;
}

export interface ICartListProps {
  order: IOrderItem[];
  handleBasketShow: () => void;
  removeFromBasket: (id: string) => void;
  decQuantity: (id: string) => void;
  incQuantity: (id: string) => void;
}

export interface ICartItemProps extends IOrderItem {
  removeFromBasket: (id: string) => void;
  decQuantity: (id: string) => void;
  incQuantity: (id: string) => void;
}

export interface IAlertProps {
  name: string;
  closeAlert: () => void;
}
