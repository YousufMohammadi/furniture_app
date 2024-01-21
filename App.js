import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
export default function App() {
  const [fontsLoaded] = useFonts({
    regular: "./assets/fonts/Poppins-Regular.ttf",
    light: "./assets/fonts/Poppins-Light.ttf",
    bold: "./assets/fonts/Poppins-Bold.ttf",
    medium: "./assets/fonts/Poppins-Medium.ttf",
    semiBold: "./assets/fonts/Poppins-SemiBold.ttf",
    extraBold: "./assets/fonts/Poppins-ExtraBold.ttf",
  });
  const onLayoutRootView = useCallback(async()=>{
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
    if (!fontsLoaded) {
      return null;
    }
  },[fontsLoaded]);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Project Structure created !</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "semiBold",
    fontSize: 20,
  },
});
