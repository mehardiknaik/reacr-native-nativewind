import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";

const Chat = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <FlatList
        data={Array(100).fill(1)}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Detail", {
                id: index,
              })
            }
            className="p-2 border m-1 rounded-lg"
          >
            <Text>Item {index}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Chat;
