import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "../styles/LoginScreenStyles"; 

type LoginCardProps = {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
  isEmailValid: boolean; 
};

const LoginCard: React.FC<LoginCardProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  isEmailValid,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onEmailChange}
        placeholder="E-posta"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {(!isEmailValid && email.trim().length !== 0) && (
        <Text style={styles.invalidInput}>Geçersiz email</Text>
      )}
      <TextInput
        secureTextEntry={true}
        style={{...styles.input,marginTop:10}}
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Şifre"
      />
   
    </View>
  );
};

export default LoginCard;
