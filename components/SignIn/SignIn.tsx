import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import * as Google from "expo-auth-session/providers/google";
import tw from "twrnc";
import FaceBook from "../../assets/images/facebook.png";
import GoogleLogo from "../../assets/images/google.png";
import Apple from "../../assets/images/apple.png";
import { useNavigation } from "@react-navigation/native";
import Input from "../Input /Input.Component";
import { AmazonContext } from "../../context/AmazonContext";

const SignIn = () => {
  const route = useNavigation();
  const { setAccessToken } = useContext(AmazonContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.APP_CLINT_ID,
    iosClientId:
      "872500324349-o1egfvqjo00qh4fv58tt4do5p4kv0tnk.apps.googleusercontent.com",
  });
  // const {setAccessToken}
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      setAccessToken(authentication?.accessToken);
      route.navigate("Home");
    }
  }, [response]);

  return (
    <View style={tw`px-4  mt-22 items-center flex-1 `}>
      <View style={tw`w-full`}>
        <Input placeholder="Email" title="Email" isSecure={false} />
        <Input
          placeholder="Password"
          isSecure={true}
          title="Enter your password"
        />
      </View>
      {/* Login btn */}
      <TouchableOpacity
        style={tw`mx-4 w-full bg-sky-500 py-3 mt-4 rounded-xl `}
      >
        <Text style={tw`text-white text-center text-xl`}>Login</Text>
      </TouchableOpacity>

      <View style={tw` w-[90%] mx-auto border-gray-600 mt-4 border-b `} />
      {/* conditions*/}
      <View style={tw`w-full my-2`}>
        <Text style={tw`px-2 text-white text-center font-semibold mt-4`}>
          By continuing, you agree to Amazon's
          <Text style={tw`text-sky-400 font-semibold`}>Conditions of Use </Text>
          and{" "}
          <Text style={tw`text-sky-400 font-semibold`}> Privacy Notice.</Text>
        </Text>
      </View>
      {/* social login */}
      <View style={tw`flex-row items-center justify-center `}>
        <SocialIcon Icons={FaceBook} />

        <SocialIcon promptAsync={promptAsync} Icons={GoogleLogo} />

        <SocialIcon Icons={Apple} />
      </View>
    </View>
  );
};

export default SignIn;

const SocialIcon = ({ Icons, promptAsync }: any) => {
  return (
    <TouchableOpacity
      onPress={() => {
        promptAsync({
          provider: "google",
          scopes: ["profile", "email"],
        });
      }}
      style={tw`bg-gray-700  mx-3 rounded-full p-2`}
    >
      <Image source={Icons} style={tw`h-[32px] w-[31px]`} />
    </TouchableOpacity>
  );
};
