import * as actionTypes from "../../constants/actionTypes";

import appAxios from "../../utils/appAxios";

export const fetchMenu = () => {
  return (dispatch: any) => {
    appAxios
      .get("/menu")
      .then((response) => {
        console.log("response.data :>> ", response.data);
        dispatch({
          type: actionTypes.FETCH_MENU,
          payload: response.data,
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
