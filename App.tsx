import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}
