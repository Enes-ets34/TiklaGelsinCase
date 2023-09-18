import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";

export default function MenuScreen() {
  return (
    <>
      <SafeAreaProvider>
        <View>
          <View style={styles.menuHeader}>
            <View>
              <TouchableOpacity>
                <Ionicons name="exit" size={32} color="#e91d34" />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 20, color: "#e91d34", fontWeight: "700" }}>
              Ürün Listesi
            </Text>
            <View>
              <TouchableOpacity style={{ position: "relative", padding: 5 }}>
                <Fontisto name="shopping-basket" size={24} color="#e91d34" />
                <Text
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "#e91d34",
                    fontWeight: "700",
                  }}
                >
                  1
                </Text>
              </TouchableOpacity>
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
                placeholder="Arama yap"
              />
              <MaterialIcons
                name="search"
                style={{
                  position: "absolute",
                  left: 10,
                  top: 5,
                  color: "#e91d34",
                }}
                size={32}
                color="black"
              />
            </View>
          </View>
        </View>
        <ScrollView style={{ paddingTop: 10 }}>
          {Array.from({ length: 30 }).map((_, i) => (
            <View
              key={i}
              style={{
                backgroundColor: "#e91d34",
                padding: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor:'#FFF',
                borderBottomWidth:1
              }}
            >
              <Image
                source={{
                  uri: "https://images.deliveryhero.io/image/fd-tr/LH/r3qf-hero.jpg",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  objectFit: "contain",
                }}
              />
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Text style={{ color: "#FFF" }}>Menu {i + 1}</Text>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ fontSize: 10, color: "#FFF" }}>
                    İçindekiler:
                  </Text>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ fontSize: 10, color: "#FFF" }}>
                      Domates,{" "}
                    </Text>
                    <Text style={{ fontSize: 10, color: "#FFF" }}>Biber, </Text>
                    <Text style={{ fontSize: 10, color: "#FFF" }}>
                      Patlıcan
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  padding: 5,
                  borderRadius: 100,
                  borderWidth: 1,
                  backgroundColor: "#FFF",
                }}
              >
                <Text style={{ fontSize: 10 }}>150TL Sepete Ekle</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
