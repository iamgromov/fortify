import type { IAction, IState } from '../types/interfaces';

export function reducer(state: IState, action: IAction) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload.data || [],
        loading: false,
      };

    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.offerId == payload?.orderItem?.offerId
      );

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload?.orderItem,
          quantity: 1,
        };

        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index == itemIndex) {
            return {
              ...payload?.orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload?.orderItem?.displayName,
      };
    }

    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.offerId == payload.itemId) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          }

          return orderItem;
        }),
      };

    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map((orderItem) => {
          if (orderItem.offerId == payload.itemId) {
            return {
              ...orderItem,
              quantity: orderItem.quantity == 0 ? 0 : orderItem.quantity - 1,
            };
          }

          return orderItem;
        }),
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(
          (orderItem) => orderItem.offerId !== payload.itemId
        ),
      };

    default:
      return state;
  }
}
