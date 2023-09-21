// store/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import menuReducer from './menuReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  menu: menuReducer,
  cart: cartReducer,
});

export default rootReducer;
