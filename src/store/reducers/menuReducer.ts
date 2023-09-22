import { MenuItem } from "../../interfaces/_MenuItem";
import * as actionTypes from "../../constants/actionTypes";

interface MenuState {
  menuItems: MenuItem[];
  filteredItems: MenuItem[];
  searchText: string;
}

const initialState: MenuState = {
  menuItems: [],
  filteredItems: [],
  searchText: "",
};
const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_MENU:
      return { ...state, menuItems: action.payload };
    case actionTypes.FILTER_MENU:
      const searchText = action.payload.toLowerCase();
      const filteredItems = state.menuItems.filter((item) => {
        const itemNameLower = item.name.toLowerCase();
        const ingredientsLower = item.ingredients
          .map((ingredient) => ingredient.toLowerCase())
          .join(" ");

        return (
          itemNameLower.includes(searchText) ||
          ingredientsLower.includes(searchText)
        );
      });

      return { ...state, searchText: action.payload, filteredItems };
    case actionTypes.UPDATE_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
