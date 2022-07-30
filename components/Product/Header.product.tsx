import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
const HeaderProduct = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row justify-between items-center mt-6 px-4`}>
      {/* Left */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FeatherIcon name="arrow-left" size={25} color="#000" />
      </TouchableOpacity>
      {/* Middle */}
      <Image
        source={require("../../assets/images/Amazonlogo.png")}
        style={tw`h-9 w-[120px] ml-10`}
      />
      {/* right */}
      <View style={tw`flex-row`}>
        <FeatherIcon name="search" style={tw`mx-4`} size={25} color="#000" />
        <FeatherIcon name="shopping-cart" size={25} color="#000" />
      </View>
      
    </View>
  );
};

export default HeaderProduct;
