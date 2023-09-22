
import * as actionTypes from "../../constants/actionTypes";

export const showModal = (message:string, icon:string) => {
  return {
    type: actionTypes.SHOW_MODAL,
    payload: {
      message,
      icon,
    },
  };
};

export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL,
  };
};
