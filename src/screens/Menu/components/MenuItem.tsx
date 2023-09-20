// /src/components/Menu/MenuItem.tsx

import React from "react";

import { Text, View, Image, TouchableOpacity } from "react-native";
import MenuScreenStyles from "../styles/MenuScreenStyles"; // Stil dosyasını içe aktarın

type MenuItemProps = {
  index: number;
  menuItem: any;
};

const MenuItem: React.FC<MenuItemProps> = ({ menuItem, index }) => {
  return (
    <View
      style={[
        MenuScreenStyles.menuItem,
        index % 2 === 0 ? MenuScreenStyles.evenItem : MenuScreenStyles.oddItem,
      ]}
    >
      <Image
        source={{
          uri: "https://images.deliveryhero.io/image/fd-tr/LH/r3qf-hero.jpg",
        }}
        style={MenuScreenStyles.menuItemImage}
      />
      <View   style={MenuScreenStyles.menuItemContent}>
        <Text style={MenuScreenStyles.menuItemText}>{menuItem.name}</Text>
        <View style={MenuScreenStyles.menuItemIngredients}>
          <Text style={MenuScreenStyles.ingredientsLabel}>İçindekiler:</Text>
          <Text  style={MenuScreenStyles.ingredientsText}>
            {menuItem.ingredients.map((i: string,index:number) => {
              return <Text numberOfLines={1} ellipsizeMode="tail" style={{ marginRight: 1 }}>{`${i} ${index+1 === menuItem.ingredients.length ? "" : ","}`}</Text>;
            })}
       
          </Text>
        </View>
      </View>
      <TouchableOpacity style={MenuScreenStyles.addToCartButton}>
        <Text style={MenuScreenStyles.addToCartButtonText}>
          150TL Sepete Ekle
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;
