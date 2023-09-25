import { SafeAreaProvider } from "react-native-safe-area-context";
import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem as _MenuItem } from "../../interfaces/_MenuItem";
import { addToCart } from "../../store/actions/cartActions";

type Props = {};

const MenuScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { menuItems, filteredItems } = useSelector((state: any) => state.menu);

  let renderData = filteredItems.length > 0 ? filteredItems : menuItems;
 


  const addCartHandler = (item: _MenuItem) => {

    dispatch(addToCart(item));
    
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
