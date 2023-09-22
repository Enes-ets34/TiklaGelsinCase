// store/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  cart: cartReducer,
  modal: modalReducer,
});

export default rootReducer;
