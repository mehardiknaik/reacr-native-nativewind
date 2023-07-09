import { NativeWindStyleSheet } from "nativewind";
import Navigation from "./src/screens";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Navigation />
    </NavigationContainer>
  );
}

const linking = {
  config: {
    screens: {
      path: "",
      Home: {
        screens: {},
      },
      Detail: ":id",
      Setting: {
        path: "setting",
      },
    },
  },
};
