import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  return (
    <View
      style={tailwind`h-[60px]  justify-around flex-row items-center bg-[#f5f5f5] w-full    `}
    >
      <RenderIcon name="home" size={25} color="#A66CFF" />
      <RenderIcon name="shopping-bag" size={25} color="#A66CFF" />
      <RenderIcon name="home" size={25} color="#A66CFF" />

      <RenderIcon name="user" size={25} color="#A66CFF" />
    </View>
  );
};

export default Footer;

const RenderIcon = ({ name, size, color }) => {
  const navigation = useNavigation();
  const HandlePress = () => {
    if (name === "home") {
      navigation.navigate("Home");
    }
    if (name === "shopping-bag") {
      navigation.navigate("Cart");
    }
    if (name === "user") {
      navigation.navigate("Login");
    }
  };
  return (
    <TouchableOpacity onPress={HandlePress} style={tailwind`h-[30px] mx-5 `}>
      <View
        style={tailwind`rounded-full bg-white  w-11 h-11 items-center justify-center`}
      >
        <Feather name={name} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};
