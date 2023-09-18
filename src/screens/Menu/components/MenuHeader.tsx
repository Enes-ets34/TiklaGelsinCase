// /src/components/Menu/MenuHeader.tsx

import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import MenuScreenStyles from "../styles/MenuScreenStyles"; // Stil dosyasını içe aktarın
import { useNavigation } from "@react-navigation/native";
type Props = {};
const MenuHeader: React.FC<Props> = () => {
  const navigation = useNavigation();
  const onLogout = () => {
    navigation.navigate("Login");
  };
  const handleCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={MenuScreenStyles.menuHeader}>
      <View>
        <TouchableOpacity onPress={onLogout}>
          <Ionicons name="exit" size={32} color="#e91d34" />
        </TouchableOpacity>
      </View>
      <Text style={MenuScreenStyles.menuHeaderText}>Ürün Listesi</Text>
      <View>
        <TouchableOpacity
          onPress={handleCart}
          style={MenuScreenStyles.cartIconContainer}
        >
          <Fontisto name="shopping-basket" size={24} color="#e91d34" />
          <Text style={MenuScreenStyles.cartItemCount}>1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuHeader;
