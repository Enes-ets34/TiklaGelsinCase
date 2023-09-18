import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../styles/LoginScreenStyles"; // Stil tanımlamalarını içeren dosya

const LoginCard: React.FC = () => {
  return (
    <View>
      <TextInput style={styles.input} />
      <Text style={styles.invalidEmail}>Geçersiz email</Text>
      <TextInput secureTextEntry={true} style={styles.input} />
    </View>
  );
};

export default LoginCard;
