import { View, Text } from "react-native";
import React from "react";
import { Link } from "@react-navigation/native";
import Chat from "../../components/Chat";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <Text>Web</Text>
      <Chat />
    </View>
  );
};

export default HomeScreen;
