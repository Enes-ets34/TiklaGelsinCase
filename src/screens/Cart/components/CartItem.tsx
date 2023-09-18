// /src/components/Menu/MenuItem.tsx

import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import CartScreenStyles from "../styles/CartScreenStyles"; // Stil dosyasını içe aktarın

type CartItemProps = {
  index: number;
};

const MenuItem: React.FC<CartItemProps> = ({ index }) => {
  return (
    <View  style={CartScreenStyles.cartItem}>
    <Image
      source={{
        uri: "https://images.deliveryhero.io/image/fd-tr/LH/r3qf-hero.jpg",
      }}
      style={CartScreenStyles.cartItem}
    />
    <View style={{ marginLeft: 10 }}>
      <Text style={{ color: "#FFF" }}>Menu {index + 1}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 10, color: "#FFF" }}>İçindekiler:</Text>
        <Text style={{ fontSize: 10, color: "#FFF" }}>
          Domates, Biber, Patlıcan
        </Text>
      </View>
    </View>
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={{
          padding: 8,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "#FFF",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "900" }}>+</Text>
      </TouchableOpacity>
      <Text style={{ color: "#FFF", marginHorizontal: 5 }}>1 Adet</Text>
      <TouchableOpacity
        style={{
          padding: 8,
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: "#FFF",
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "900" }}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
};

export default MenuItem;
