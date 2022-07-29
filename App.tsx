import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home.screen";
import LoginScreen from "./screen/Login.screen";

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <stack.Navigator>
          {/* Home Screen */}
          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
        </stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
