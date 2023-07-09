import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homeScreen";
import { Text } from "react-native";
import SettingScreen from "./settingScreen.jsx";
import DetailScreen from "./detailScreen";

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: "dark",
        // statusBarTranslucent: true,
        // headerTransparent: true,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Screens;
