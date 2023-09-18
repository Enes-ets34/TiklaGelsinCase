// /src/screens/Menu/index.tsx

import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { ScrollView } from "react-native";

import React from "react";
import MenuHeader from "./components/MenuHeader";
import MenuItem from "./components/MenuItem";

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const MenuScreen: React.FC<Props> = () => {
  return (
    <SafeAreaProvider>
      <ScrollView>
        <MenuHeader navigation={navigation} />
        {Array.from({ length: 30 }).map((_, i) => (
          <MenuItem key={i} index={i} />
        ))}
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default MenuScreen;
