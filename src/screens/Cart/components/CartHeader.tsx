// /src/components/Menu/MenuHeader.tsx

import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import CartScreenStyles from "../styles/CartScreenStyles"; // Stil dosyasını içe aktarın
import { useNavigation } from "@react-navigation/native";
type Props = {};
const CartHeader: React.FC<Props> = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.navigate("Menu");
  };
  return (
    <View style={CartScreenStyles.cartHeader}>
      <TouchableOpacity
        onPress={goBack}
        style={{ position: "absolute", top: 10, left: 10 }}
      >
        <FontAwesome5 name="chevron-left" size={24} color="#e91d34" />
      </TouchableOpacity>
      <View style={{ paddingTop: 10 }}>
        <Text style={CartScreenStyles.cartHeaderText}>
          Sepet
        </Text>
      </View>
    </View>
  );
};

export default CartHeader;
