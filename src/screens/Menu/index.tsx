import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem as _MenuItem } from "../../interfaces/_MenuItem";
import { addToCart } from "../../store/actions/cartActions";
import useMenu from "./hooks/useMenu";
import {showModal} from "../../store/actions/modalActions"
type Props = {};

const MenuScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const {
    renderData
    // @ts-ignore
  } = useMenu();
  const addCartHandler = (item: _MenuItem) => {
    dispatch(addToCart(item));
    dispatch(
      showModal(
        `${item.name} başarıyla sepetinize eklendi...`,
        "success"
      )
    );
  };

  return (
    <SafeAreaProvider>
      <MenuHeader />
      <ScrollView>
        {renderData.map((menuItem: _MenuItem, index: number) => (
          <MenuItem
            addCartHandler={addCartHandler} 
            menuItem={menuItem}
            key={menuItem.id}
            index={index}
          />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default MenuScreen;
