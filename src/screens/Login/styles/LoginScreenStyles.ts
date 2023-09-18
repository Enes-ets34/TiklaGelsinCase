import { StyleSheet } from "react-native";
import * as Theme from "../../../styles/Theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.primaryColor,
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
    borderRadius: Theme.borderRounded,
    backgroundColor: Theme.primaryColor,
    textAlign: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 20,
  },
  loginBtnText: {
    color: "white",
    fontSize: Theme.fontSizeLarge,
    fontWeight: "500",
  },
  input: {
    fontWeight: "700",
    backgroundColor: "white",
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 30,
    borderRadius: Theme.borderRounded,
    borderColor: Theme.primaryColor,
    borderWidth: 2,
    outlineColor: "red",
  },
  invalidEmail: {
    paddingLeft: 30,
    marginTop: 5,
    fontWeight: "800",
    color: "#d60018",
    marginVertical: 10,
  },
  
});

export default styles;
