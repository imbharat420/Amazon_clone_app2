import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/Home.screen";
import LoginScreen from "./screen/Login.screen";
import ProductScreen from "./screen/Product.screen";
import "react-native-gesture-handler";
import ProductListScreen from "./screen/ProductList.screen";

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
          {/* Home screen */}
          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />

          {/* Product */}

          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="ProductDetail"
            component={ProductScreen}
          />

          {/* Product list page */}
          <stack.Screen
            options={{
              headerShown: false,
            }}
            name="ProductList"
            component={ProductListScreen}
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
