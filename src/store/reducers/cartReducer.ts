// cartReducer.js

import { MenuItem } from "../../interfaces/_MenuItem";
import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  cartItems: [] as MenuItem[],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      console.log(action.payload);

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
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
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: (item.qty || 0) - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
