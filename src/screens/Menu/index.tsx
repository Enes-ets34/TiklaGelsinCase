// /src/screens/Menu/index.tsx

import { SafeAreaProvider } from "react-native-safe-area-context";

import { ScrollView } from "react-native";

import React, { useState } from "react";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";
import { useSelector } from "react-redux";

type Props = {};

const MenuScreen: React.FC<Props> = () => {
  const { menuItems } = useSelector((state: any) => state.menu);

  return (
    <SafeAreaProvider>
      <ScrollView>
        <MenuHeader />
        {menuItems.map((menuItem: any, index: number) => (
          <MenuItem menuItem={menuItem} key={menuItem.id} index={index} />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default MenuScreen;
