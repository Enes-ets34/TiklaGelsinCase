import * as actionTypes from "../../constants/actionTypes";
import { MenuItem } from "../../interfaces/_MenuItem";

export const addToCart = (menuItem: MenuItem) => ({
  type: actionTypes.ADD_TO_CART,
  payload: menuItem,
});

export const removeFromCart = (menuItem: MenuItem) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: menuItem,
});

export const increaseQuantity = (menuItem: MenuItem) => ({
  type: actionTypes.INCREASE_QUANTITY,
  payload: menuItem,
});

export const decreaseQuantity = (menuItem: MenuItem) => ({
  type: actionTypes.DECREASE_QUANTITY,
  payload: menuItem,
});
