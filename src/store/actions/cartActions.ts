import * as actionTypes from "../../constants/actionTypes";
import { MenuItem } from "../../interfaces/_MenuItem";

export const addToCart = (menuItem: MenuItem) => ({
  type: actionTypes.ADD_TO_CART,
  payload: {...menuItem,qty:1},
});

export const removeFromCart = (menuItem: MenuItem) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: menuItem,
});

export const increaseQty = (menuItem: MenuItem) => ({
  type: actionTypes.INCREASE_QTY,
  payload: menuItem,
});

export const decreaseQty = (menuItem: MenuItem) => ({
  type: actionTypes.DECREASE_QTY,
  payload: menuItem,
});
