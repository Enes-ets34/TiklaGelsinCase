import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles/LoginScreenStyles"; // Stil tanımlamalarını içeren dosya
import LoginCard from "./components/LoginCard"; // Yeni bileşen

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Menu");
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Tıkla Gelsin</Text>
      </View>
      <View style={styles.loginLayout}>
        <LoginCard /> {/* Yeni bileşeni kullanın */}
        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
    
  );
};

export default LoginScreen;
