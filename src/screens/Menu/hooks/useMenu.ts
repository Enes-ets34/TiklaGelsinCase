import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../../../store/actions/cartActions";
import {MenuItem as _MenuItem} from "../../../interfaces/_MenuItem"

const useMenu = (item:_MenuItem) => {
  const dispatch = useDispatch();
  const { menuItems,filteredItems } = useSelector((state: any) => state.menu);
  const { cartItems } = useSelector((state: any) => state.cart);
  const [hasAlreadyCart, setHasAlreadyCart] = useState(false);
  const [foundedData, setFoundedData] = useState(null);
  
  let renderData = filteredItems.length > 0 ? filteredItems : menuItems;
  useEffect(() => {
    const foundedData = cartItems.find((m: _MenuItem) => {
      return m.id === item?.id;
    });
    if (foundedData) {
      setHasAlreadyCart(true);
      setFoundedData(foundedData)
    }else{
      setFoundedData(null)
      setHasAlreadyCart(false);
    }
  }, [cartItems, item]);
  const removeCartHandler = (item: _MenuItem) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item: _MenuItem) => {
    dispatch(increaseQty(item));
  };
  const decreaseQuantity = (item: _MenuItem) => {
    dispatch(decreaseQty(item));
  };



  return {
    menuItems,
    filteredItems,
    renderData,
    hasAlreadyCart,
    foundedData,
    removeCartHandler,
    increaseQuantity,
    decreaseQuantity
  };
};

export default useMenu;
