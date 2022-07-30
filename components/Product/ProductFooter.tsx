import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import FeatherIcon from "react-native-vector-icons/Feather";
const ProductFooter = () => {
  return (
    <View style={tw`bg-[#1A232E] flex-1 pb-3 flex-row items-center h-[90px]`}>
      <TouchableOpacity style={tw` px-4 flex-row flex-1 items-center`}>
        <FeatherIcon
          name="shopping-cart"
          size={30}
          color="#FF9900"
          style={tw`mr-2`}
        />
        <Text style={tw` font-semibold text-white`}>Add to Cart</Text>
      </TouchableOpacity>
      {/* Buy now  */}
      <TouchableOpacity
        style={tw`bg-[#FF9900] mr-4 p-4 w-[190px] items-center py-4 rounded-xl`}
      >
        <Text style={tw`text-black font-semibold`}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProductFooter;
