
import * as Actions from "../../constants/actionTypes";
import appAxios from "../../utils/appAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const loginUser = (userData: Object) => {

  return (dispatch: any) => {
    appAxios
      .get(`/users?email=${userData?.email}&password=${userData?.password}`)
      .then((response) => {
        if (response.data.length > 0) {
          const user = response.data[0];
          // Kullanıcı verilerini AsyncStorage'e kaydet
          AsyncStorage.setItem("user", JSON.stringify(user))
            .then(() => {
              // AsyncStorage'e kaydedildikten sonra Redux'a dispatch yap
              dispatch({
                type: Actions.LOGIN,
                payload: user,
              });
              
            })
            .catch((error) => {
              console.error("AsyncStorage Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const logoutUser = () => {
  return (dispatch: any) => {
    AsyncStorage.removeItem("user")
      .then(() => {
        dispatch({
          type: Actions.LOGOUT,
          payload: null,
        });
        
      })
      .catch((error) => {
        console.error("AsyncStorage Error:", error);
      });
  };
};
