import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage"; // AsyncStorage ekleyin

import LoginScreen from "../screens/Login";
import MenuScreen from "../screens/Menu";
import CartScreen from "../screens/Cart";
import { fetchMenu } from "../store/actions/menuActions";

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  let { user } = useSelector((state: any) => state.user);

  useEffect(() => {
    // AsyncStorage'den kullanıcı bilgisini alın
    dispatch(fetchMenu());
    AsyncStorage.getItem("user")
      .then((storedUser) => {
        if (storedUser) {
          // Kullanıcı bilgisi Redux store'a gönderilir
          dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
          user = { ...JSON.parse(storedUser) };
         
        } else {
          user = null;
        }
      })
      .catch((error) => {
        console.error("AsyncStorage Error:", error);
      });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Login"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
