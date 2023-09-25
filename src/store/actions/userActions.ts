
import * as Actions from "../../constants/actionTypes";
import appAxios from "../../utils/appAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {User} from "../../interfaces/_User"
import { showModal } from "./modalActions";

export const loginUser = (userData: User) => {

  return (dispatch: any) => {
    appAxios
      .get(`/users?email=${userData?.email}&password=${userData?.password}`)
      .then((response) => {
        if (response.data.length > 0) {
          const user = response.data[0];
          AsyncStorage.setItem("user", JSON.stringify(user))
            .then(() => {
              dispatch({
                type: Actions.LOGIN,
                payload: user,
              });
              
            })
            .catch((error) => {
              dispatch(showModal(error,"error"))
            });
        }
        else{          
         dispatch(showModal("kullanıcı adınız veya şifreniz hatalıdır...","error"))
        }
      })
      .catch((error) => {
        dispatch(showModal(error,"error"))

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
        dispatch(showModal(error,"error"))
      });
  };
};
