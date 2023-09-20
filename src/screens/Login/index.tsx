import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/LoginScreenStyles";
import LoginCard from "./components/LoginCard";
import { loginUser } from "../../store/actions/userActions";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

type Props = {};

const LoginScreen: React.FC<Props> = () => {
  const { user } = useSelector((state: any) => state.user);
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const handleLogin = () => {
    if (!isLoginDisabled) {
      dispatch(loginUser({ email, password }));
    }
  };
  useEffect(() => {
    if (user) {
      navigator.navigate("Menu");
    }
  }, [user]);

  const onEmailChange = (text: string) => {
    setEmail(text);
    setIsEmailValid(emailRegex.test(text));
    setIsLoginDisabled(!emailRegex.test(text) || password.length < 8);
  };

  const onPasswordChange = (text: string) => {
    setPassword(text);
    setIsLoginDisabled(!isEmailValid || text.length < 8);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Tıkla Gelsin</Text>
      </View>
      <View style={styles.loginLayout}>
        <LoginCard
          email={email}
          password={password}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          isEmailValid={isEmailValid}
        />
        <Text>{JSON.stringify(email)}</Text>
        <Text>{JSON.stringify(password)}</Text>
        <Text>{JSON.stringify(isEmailValid)}</Text>
        <Text>{JSON.stringify(user)}</Text>
        <TouchableOpacity
          onPress={handleLogin}
          style={[styles.loginBtn, { opacity: isLoginDisabled ? 0.5 : 1 }]}
          disabled={isLoginDisabled}
        >
          <Text style={styles.loginBtnText}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
