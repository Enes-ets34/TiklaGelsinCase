import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "./components/CartHeader";
import CartItem from "./components/CartItem";
import CartScreenStyles from "./styles/CartScreenStyles";

type Props = {};

const CartScreen: React.FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CartHeader />
      {Array.from({ length: 5 }).map((_, i) => (
        <CartItem index={i} />
      ))}
      <View style={CartScreenStyles.cartSummary}>
        <View style={CartScreenStyles.cartPriceInfo}>
          <Text>
            Fiyat <Text style={CartScreenStyles.oldPrice}>40TL</Text>
          </Text>
          <Text style={CartScreenStyles.discount}>İndirim 3TL</Text>
        </View>
        <Text style={CartScreenStyles.total}>Toplam 37 TL</Text>
      </View>
      <View style={CartScreenStyles.cartFooter}>
        <TouchableOpacity style={CartScreenStyles.buyButton}>
          <Text style={CartScreenStyles.buyButtonText}>240TL Satın Al</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
