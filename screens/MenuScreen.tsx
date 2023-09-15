import { SafeAreaProvider } from "react-native-safe-area-context";

import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
export default function MenuScreen() {
  return (
    <>
      <SafeAreaProvider>
        <View style={styles.menuHeader}>
          <View>
            <Text>Cikis</Text>
          </View>
          <Text style={{ fontSize: 20, color: "#e91d34" }}>Ürün Listesi</Text>
          <View>
            <Text>Sepet</Text>
          </View>
        </View>
        <View style={styles.searchArea}>
          <View style={styles.searchBar}>
            <TextInput
              style={{
                outlineStyle: "none",
                position: "absolute",
                left: 50,
                top: 0,
                backgroundColor: "transparent",
                width: "80%",
                height: "100%",
              }}
            />
            <Image
              source={{
                uri: "https://www.citypng.com/public/uploads/preview/png-red-search-icon-button-11640084036hxyfzazl4w.png",
              }}
              style={{ width: 30, height: 30, objectFit: "contain", position:'absolute', left:3 ,top:5 }} // İsteğe bağlı: Boyutlandırma için kullanılabilir
            />
          </View>
        </View>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  menuHeader: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchArea: {
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  searchBar: {
    position: "relative",
    borderWidth: 1,
    borderRadius: 100,
    padding: 20,
    
  },
});
