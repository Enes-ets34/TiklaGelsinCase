import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MenuScreenStyles from "../styles/MenuScreenStyles";
import { useSelector, useDispatch } from "react-redux";
import { MenuItem as _MenuItem } from "../../../interfaces/_MenuItem";

import useMenu from "../hooks/useMenu";

type Props = {
  index: number;
  menuItem: _MenuItem;
  addCartHandler:Function
};

const MenuItem: React.FC<Props> = ({ menuItem, index,addCartHandler }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    hasAlreadyCart,
    foundedData
  } = useMenu(menuItem);
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
      <View style={MenuScreenStyles.menuItemContent}>
        <Text style={MenuScreenStyles.menuItemText}>{menuItem.name}</Text>
        <View style={MenuScreenStyles.menuItemIngredients}>
          <Text style={MenuScreenStyles.ingredientsLabel}>İçindekiler:</Text>
          <Text style={MenuScreenStyles.ingredientsText}>
            {menuItem.ingredients.map((i: string, index: number) => {
              return (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ marginRight: 1 }}
                  key={index}
                >{`${i} ${
                  index + 1 === menuItem.ingredients.length ? "" : ","
                }`}</Text>
              );
            })}
          </Text>
        </View>
      </View>
      {hasAlreadyCart && (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => increaseQuantity(menuItem)} // Ürün adedini artırmak için işlevi çağırın
            style={{
              padding: 8,
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: "#FFF",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "900" }}>+</Text>
          </TouchableOpacity>

          <Text style={{ color: "#FFF", marginHorizontal: 5 }}>
            {/* @ts-ignore */}
            {foundedData?.qty} Adet
          </Text>
          <TouchableOpacity
            onPress={() => decreaseQuantity(menuItem)} // Ürün adedini azaltmak için işlevi çağırın
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
      )}
      {hasAlreadyCart || menuItem.qty===0 && (
          <TouchableOpacity
            onPress={() => addCartHandler(menuItem)}
            style={MenuScreenStyles.addToCartButton}
          >
            <Text style={MenuScreenStyles.addToCartButtonText}>
              {menuItem.price} TL Sepete Ekle
            </Text>
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default MenuItem;
