import * as actionTypes from "../../constants/actionTypes";
import { MenuItem } from "../../interfaces/_MenuItem";

export const fetchMenu = (menuData: MenuItem[]) => ({
  type: actionTypes.FETCH_MENU,
  payload: menuData,
});
