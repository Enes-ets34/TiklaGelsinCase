import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "./components/CartHeader";
import MenuItem from "../Menu/components/MenuItem";
import { MenuItem as _MenuItem } from "../../interfaces/_MenuItem";
import CartScreenStyles from "./styles/CartScreenStyles";
import useCart from "./hooks/useCart"; 
import { useNavigation } from "@react-navigation/native";

type Props = {};

const CartScreen: React.FC<Props> = () => {
  const {
    cartItems,
    totalPrice,
    discountAvailable,
    discount,
    price,
    handleClearCart,
  } = useCart();

 const navigator = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartHeader />
    
      {cartItems.length === 0 ? (
        <View style={CartScreenStyles.emptyCartMessageContainer}>
          <Text>
            sepetiniz boş...{" "}
            {/* @ts-ignore */}
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
