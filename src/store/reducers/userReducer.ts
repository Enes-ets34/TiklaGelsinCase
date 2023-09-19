import * as Actions from "../../constants/actionTypes";
const initialState = {
  user: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.LOGIN:
      return { ...state, user: action.payload };
    case Actions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;
