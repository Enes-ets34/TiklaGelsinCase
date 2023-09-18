import { StyleSheet } from "react-native";
import * as Theme from "../../../styles/Theme";

const CartScreenStyles = StyleSheet.create({
  cartHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 20,
  },
  cartHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    color: Theme.primaryColor,
  },
  cartItem: {
    backgroundColor: Theme.primaryColor,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  cartItemImage: {
    width: 40,
    height: 40,
    borderRadius: Theme.borderRounded,
    resizeMode: "contain",
  },
  cartSummary: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cartPriceInfo: {
    display: "flex",
    borderBottomWidth: 2,
    paddingHorizontal: 50,
  },
  oldPrice: {
    textDecorationLine: "line-through",
  },
  discount: {
    marginVertical: 5,
  },
  total: {
    marginTop: 20,
  },
  cartFooter: {
    backgroundColor: "#dedede",
    bottom: 0,
    padding: 10,
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: "gray",
    position: "sticky",
  },
  buyButton: {
    backgroundColor: Theme.primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
  buyButtonText: {
    fontWeight: "700",
    color: "#FFF",
    fontSize: 16,
  },
});

export default CartScreenStyles;
