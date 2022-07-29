import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";

import Input from "../components/Input /Input.Component";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const route = useNavigation();
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
      {/* Input */}

      <View style={tw` mt-8   px-4`}>
        <Input placeholder=" name" title="Your name" isSecure={false} />
        <Input placeholder="email" title="Email" isSecure={false} />
        <Input
          placeholder="At least 6 character"
          title="Password"
          isSecure={true}
        />
        <Input
          placeholder="At least 6 character"
          title="Re-enter Password"
          isSecure={true}
        />
      </View>
      {/* Button */}
      <View style={tw`mt-6 justify-center px-4   items-center `}>
        <TouchableOpacity
          style={tw` bg-sky-400 w-full py-3 rounded-xl items-center`}
        >
          <Text>
            <Text style={tw` font-bold`}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* conditions*/}
      <View>
        <Text style={tw`px-5 text-white text-center font-semibold mt-4`}>
          By continuing, you agree to Amazon's{" "}
          <Text style={tw`text-sky-400 font-semibold`}>Conditions of Use </Text>
          and{" "}
          <Text style={tw`text-sky-400 font-semibold`}> Privacy Notice.</Text>
        </Text>
      </View>

      {/* divider */}
      <View style={tw` w-[70%] mx-auto border-gray-600 my-4 border-b `} />

      {/* Already have an account */}
      <View style={tw`px-4 `}>
        <Text style={tw`px-5 text-white text-center font-semibold mt-4`}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => route.navigate("Home")}
          style={tw`bg-sky-400 bg-opacity-30  mt-4  py-3 rounded-xl items-center`}
        >
          <Text style={tw`  text-sky-400  font-bold`}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
