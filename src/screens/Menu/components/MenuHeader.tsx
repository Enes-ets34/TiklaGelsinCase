// /src/components/Menu/MenuHeader.tsx

import React, { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import MenuScreenStyles from "../styles/MenuScreenStyles"; // Stil dosyasını içe aktarın
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/actions/userActions";

import { useSelector } from "react-redux";
type Props = {};
const MenuHeader: React.FC<Props> = () => {
  const { user } = useSelector((state: any) => state.user);

  const navigator = useNavigation();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
  };
  const handleCart = () => {
    navigator.navigate("Cart");
  };
  useEffect(() => {
    if (!user) {
      navigator.navigate("Login");
    }
  }, [user]);

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
