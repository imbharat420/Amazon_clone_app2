import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";

import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import SignUp from "../components/signUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  const route = useNavigation();

  const [signIn, setSignIn] = React.useState<boolean>(false);
  return (
    <SafeAreaView style={tw` bg-gray-900 flex-1`}>
      {/* Logo */}
      <View style={tw`items-center justify-center mt-4`}>
        <Image
          source={{
            uri: "https://cdn.sanity.io/images/7azvzymu/production/e2b54ca7b0256bc44f5485cdc936149b2670e93f-711x351.png",
          }}
          style={tw`w-[150px]  h-12`}
        />
      </View>
      {/* Logo */}
      {signIn ? (
        <View style={tw`h-full`}>
          <SignIn />
        </View>
      ) : (
        <View style={tw`w-full`}>
          <SignUp setSignIn={setSignIn} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
