import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Menu");
  };
  return (
    <>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={styles.text}>Tıkla Gelsin</Text>
        </View>
        <View style={styles.loginLayout}>
          <View>
            <TextInput style={styles.input} />
            <Text
              style={{
                paddingLeft: 30,
                marginTop: 5,
                fontWeight: "800",
                color: "#d60018",
              }}
            >
              Geçersiz email
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{ ...styles.input, marginTop: 20 }}
            />
          </View>
          <View style={{ paddingBottom: 50 }}>
            <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e91d34",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1 / 3,
  },
  text: {
    color: "white",
    paddingBottom: 25,
    fontSize: 30, 
  },
  input: {
    fontWeight: "700",
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 100,
    borderColor: "#e91d34",
    borderWidth: 2,
    outlineColor: "red",
  },
  loginLayout: {
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  loginBtn: {
    borderRadius: 100,
    backgroundColor: "#e91d34",
    textAlign: "center",
    alignItems: "center",
    padding: 15,
  },
});
export default LoginScreen;
