import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../store/actions/cartActions";
import { showModal as showModalAction } from "../../../store/actions/modalActions";

const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: any) => state.cart);

  // price'ı başlangıç değeri olarak 0 tanımlayın
  const [price, setPrice] = useState(0);

  // Diğer state değerlerini değiştirmeye gerek yok
  const [discountAvailable, setDiscountAvailable] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);

  const handleClearCart = () => {
    //@ts-ignore
    dispatch(clearCart());
    dispatch(
      showModalAction(
        `${new Date().getTime()} numaralı siparişiniz başarıyla oluşturulmuştur...`,
        "success"
      )
    );
  };

  useEffect(() => {
    // price'ı doğru şekilde hesaplayın
    const newPrice = cartItems.reduce((total: number, cartItem: any) => {
      return total + cartItem.price * cartItem?.qty;
    }, 0);

    setPrice(newPrice);

    if (cartItems.length >= 2) {
      setDiscountAvailable(true);
      setDiscount(newPrice * 0.3);
      setTotalPrice(newPrice - discount);
    } else {
      setDiscountAvailable(false);
      setDiscount(0);
      setTotalPrice(newPrice);
    }
  }, [cartItems, discount]);

  return {
    cartItems,
    totalPrice,
    discountAvailable,
    discount,
    price,
    handleClearCart,
  };
};

export default useCart;
