import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons2 from "react-native-vector-icons/Entypo";
import tw from "twrnc";
const Header = () => {
  return (
    <SafeAreaView style={tw`bg-white mt-4`}>
      <View style={tw`flex-row  items-center bg-white  justify-between pb-2`}>
        {/* Left sider image */}
        <View style={tw`  `}>
          <Image
            source={require("../../assets/images/Amazonlogo.png")}
            style={tw`w-[135px] h-9`}
          />
        </View>
        {/* Right sider image */}
        <View style={tw`mr-5  flex-row  `}>
          <View
            style={tw`h-9 w-9 rounded-full bg-[#eee] mx-[20px]  flex items-center justify-center`}
          >
            <Icon size={18} name="star" color="black" />
          </View>
          <View
            style={tw`h-9 w-9 rounded-full bg-[#eee]  flex items-center justify-center`}
          >
            <Icons2 size={18} name="dots-three-horizontal" color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
