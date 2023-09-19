import { MenuItem } from "../../interfaces/_MenuItem";
import * as Actions from "../../constants/actionTypes";

interface MenuState {
  menuItems: MenuItem[];
}

const initialState: MenuState = {
  menuItems: [],
};

const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.FETCH_MENU:
      return { ...state, menuItems: action.payload };
    default:
      return state;
  }
};

export default menuReducer;
