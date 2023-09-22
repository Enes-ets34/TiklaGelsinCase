// cartReducer.js

import { MenuItem } from "../../interfaces/_MenuItem";
import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  cartItems: [] as MenuItem[],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
      
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionTypes.INCREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: (item.qty || 0) + 1 }
            : item
        ),
      };

    case actionTypes.DECREASE_QTY:
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) =>
            item.id === action.payload.id
              ? item.qty <= 1
                ? null // Qty 1 ise ürünü kaldır
                : { ...item, qty: (item.qty || 0) - 1 }
              : item
          )
          .filter((item) => item !== null), // Sıfır qty'li ürünleri çıkar
      };
    default:
      return state;
  }
};

export default cartReducer;
