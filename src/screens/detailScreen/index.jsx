import { View, Text } from "react-native";
import React from "react";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  return (
    <View className="flex-1 max-w-3xl w-full mx-auto md:border bg-purple-300 sm:bg-green-300 md:bg-red-300 lg:bg-blue-300 rounded-lg p-2">
      <Text>DetailScreen: {id}</Text>
    </View>
  );
};

export default DetailScreen;
