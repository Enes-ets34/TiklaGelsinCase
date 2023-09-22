import * as actionTypes from "../../constants/actionTypes";

import appAxios from "../../utils/appAxios";

export const fetchMenu = () => {
  return (dispatch: any) => {
    appAxios
      .get("/menu")
      .then((response) => {

        dispatch({
          type: actionTypes.FETCH_MENU,
          payload: response.data.map(m=>{
            return{
              ...m,
              qty:0
            }
          }),
        });
      })
      .catch((error) => {
        console.error("Fetch Menu Error:", error);
      });
  };
};
export const filterMenu = (searchKey: string) => {
  return (dispatch: any) => {
    dispatch({
      type:actionTypes.FILTER_MENU,
      payload:searchKey
    })
  };
};
export const updateMenuItems = (menuItems: Array<Object>) => ({
  type: actionTypes.UPDATE_MENU_ITEMS,
  payload: menuItems,
});



