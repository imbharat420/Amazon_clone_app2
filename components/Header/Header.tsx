import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={tw`bg-[#1A232E] pb-8 rounded-b-sm  `}>
      <View style={tw`flex-row  items-center  px-3  justify-between pb-2`}>
        <TouchableOpacity onPress={() => nav.navigate("Home")} style={tw` `}>
          <Icon name="align-center" size={25} color="#fff" />
        </TouchableOpacity>
        {/* center sider image */}
        <View style={tw` items-center mx-auto`}>
          <Image
            source={{
              uri: "https://cdn.sanity.io/images/7azvzymu/production/e2b54ca7b0256bc44f5485cdc936149b2670e93f-711x351.png",
            }}
            style={tw`w-[100px] ml-9 h-9`}
          />
        </View>
        {/* right */}
        <View style={tw`flex-row justify-around w-[80px] `}>
          <Icon name="shopping-cart" size={25} style={tw`mx-4`} color="#fff" />
          <Icon name="bell" size={25} color="#fff" />
        </View>
      </View>

      {/* Balance */}
    </SafeAreaView>
  );
};

export default Header;
