// /src/components/Menu/MenuHeader.tsx

import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";
import MenuScreenStyles from "../styles/MenuScreenStyles"; // Stil dosyasını içe aktarın
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../store/actions/userActions";

import { useSelector } from "react-redux";
import { TextInput } from "react-native-gesture-handler";
import { filterMenu } from "../../../store/actions/menuActions";
type Props = {};
const MenuHeader: React.FC<Props> = () => {
  const { user } = useSelector((state: any) => state.user);
  const { cartItems } = useSelector((state: any) => state.cart);
  
  const [searchKey,setSearchKey] = useState<string | null>("");
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const handleSearch = (text:string)=>{
    setSearchKey(text)
  }
  useEffect(() => {
    //@ts-ignore
    dispatch(filterMenu(searchKey));
  }, [ searchKey]);
  const onLogout = () => {
    //@ts-ignore
    dispatch(logoutUser());
  };
  const handleCart = () => {
    //@ts-ignore
    navigator.navigate("Cart");
  };
  useEffect(() => {
    if (!user) {
      //@ts-ignore
      navigator.navigate("Login");
    }
  }, [user]);

  return (
    <>
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
          {cartItems.length>0 && <Text style={MenuScreenStyles.cartItemCount}>  {cartItems.length}</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <View style={MenuScreenStyles.searchArea}>
        <View style={MenuScreenStyles.searchBar}>
          <TextInput
            onChangeText={handleSearch}
            value={searchKey || ''}
            style={MenuScreenStyles.searchInput}
            placeholder="Arama yap"
          />
        
          <MaterialIcons
            name="search"
            style={{
              position: "absolute",
              left: 10,
              top: 5,
              color: "#e91d34",
            }}
            size={32}
            color="black"
          />
        </View>
      </View>

    </>
  );
};

export default MenuHeader;
