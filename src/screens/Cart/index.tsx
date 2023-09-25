import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "./components/CartHeader";
import MenuItem from "../Menu/components/MenuItem";
import { MenuItem as _MenuItem } from "../../interfaces/_MenuItem";
import CartScreenStyles from "./styles/CartScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearCart } from "../../store/actions/cartActions";
import CustomModal from "../components/shared/Modal";
import  {showModal as showModalAction}  from "../../store/actions/modalActions";


type Props = {};

const CartScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const navigator = useNavigation();
  let price = cartItems.reduce((total: number, cartItem: _MenuItem) => {
    return total + cartItem.price * cartItem?.qty;
  }, 0);

  const [discountAvailable, setDiscountAvailable] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price); // totalPrice'i bir state olarak tanımla


  const handleClearCart = () =>{
    dispatch(clearCart())
    
    dispatch(showModalAction(`${new Date().getTime()} numaralı siparişiniz başarıyla oluşturulmuştur...`,'success'));

  }
  useEffect(() => {
    if (cartItems.length >= 2) {
      setDiscountAvailable(true);
      setDiscount(price * 0.3);
      setTotalPrice(price - discount); // totalPrice state'ini güncelle
    } else {
      setDiscountAvailable(false);
      setDiscount(0);
      setTotalPrice(price); // totalPrice state'ini güncelle
    }
  }, [cartItems]);
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartHeader />
    
      {cartItems.length === 0 ? (
        <View style={CartScreenStyles.emptyCartMessageContainer}>
          <Text>
            sepetiniz boş...{" "}
            <TouchableOpacity onPress={() => navigator.navigate("Menu")}>
              <Text
                style={{ color: "#dc2626", textDecorationLine: "underline" }}
              >
                buraya basarak
              </Text>
            </TouchableOpacity>{" "}
            menu'ye gidebilirsiniz
          </Text>
        </View>
      ) : (
        cartItems.map((cartItem: _MenuItem, index: number) => (
          //@ts-ignore
          <MenuItem  menuItem={cartItem} key={cartItem.id} index={index} />
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <View style={CartScreenStyles.cartSummary}>
            <View style={CartScreenStyles.cartPriceInfo}>
              <Text>
                <Text
                  style={
                    discountAvailable
                      ? CartScreenStyles.oldPrice
                      : CartScreenStyles.discount
                  }
                >
                  Fiyat {JSON.stringify(price)}TL
                </Text>
              </Text>
              {discountAvailable && (
                <Text style={CartScreenStyles.discount}>
                  İndirim {discount}TL
                </Text>
              )}
            </View>
            <Text style={CartScreenStyles.total}>Toplam {totalPrice} TL</Text>
          </View>
          <View style={CartScreenStyles.cartFooter}>
            <TouchableOpacity
              onPress={handleClearCart}
              style={CartScreenStyles.buyButton}
            >
              <Text style={CartScreenStyles.buyButtonText}>
                {totalPrice}TL Satın Al
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
