import * as Actions from "../../constants/actionTypes";
import { User } from "../../interfaces/_User"; // User arayüzünü içe aktarıyoruz

export const login = (userData: User) => ({
  type: Actions.LOGIN,
  payload: userData,
});

export const logout = () => ({
  type: Actions.LOGOUT,
});
