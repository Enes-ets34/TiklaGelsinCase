// modalReducer.js

import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  showModal: false,
  message: "",
  icon: "",
};

const modalReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        message: action.payload.message,
        icon: action.payload.icon,
      };
    case actionTypes.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        message: "",
        icon: "",
      };
    default:
      return state;
  }
};

export default modalReducer;
