import { StyleSheet } from "react-native";
import * as Theme from "../../../styles/Theme";
const MenuScreenStyles = StyleSheet.create({
  menuHeader: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuHeaderText: {
    fontSize: Theme.fontSizeLarge,
    color: Theme.primaryColor,
    fontWeight: "700",
  },
  evenItem: {
    backgroundColor: "#fe4357",
  },
  oddItem: {
    backgroundColor: Theme.primaryColor,
  },
  cartIconContainer: {
    position: "relative",
    padding: 5,
  },
  cartItemCount: {
    position: "absolute",
    top: 0,
    right: 0,
    color: Theme.primaryColor,
    fontWeight: "700",
  },
  menuItem: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  menuItemImage: {
    width: 40,
    height: 40,
    borderRadius: Theme.borderRounded,
    objectFit: "contain",
  },
  menuItemContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    
    flex: 1,
    paddingHorizontal: 10,
    flexWrap: "wrap",
    overflow: "hidden",
    
  },
  menuItemText: {
    color: "#FFF",
  },
  menuItemIngredients: {
    display: "flex",
    flexDirection: "row",
  },
  ingredientsLabel: {
    fontSize: Theme.fontSizeExtraSmall,
    color: "#FFF",
  },
  ingredientsText: {
    fontSize: Theme.fontSizeExtraSmall,
    color: "#FFF",
  },
  addToCartButton: {
    padding: 5,
    borderRadius: Theme.borderRounded,
    borderWidth: 1,
    backgroundColor: "#FFF",
  },
  addToCartButtonText: {
    fontSize: Theme.fontSizeExtraSmall,
  },
  // Diğer stil tanımlamalarını ekleyin
});

export default MenuScreenStyles;
