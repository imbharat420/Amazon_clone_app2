import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import CurrencyFormat from "../Currency/CurrencyFormat";
import FeatherIcon from "react-native-vector-icons/Feather";
const PriceComponent = ({ price }) => {
  return (
    <View>
      <View style={tw`mt-5 flex-row `}>
        <View style={tw`flex-1 flex-row items-center`}>
          <CurrencyFormat value={price} TextSize="2xl" color="232E3E" />

          {/* strike */}
          <Text style={tw`  line-through mx-3 text-lg `}>$ {price + 60}</Text>
        </View>
        <View style={tw`flex-row items-center `}>
          <FeatherIcon
            name="heart"
            style={tw`mx-4`}
            color="#3E4956"
            size={25}
          />
          <FeatherIcon name="share" color="#3E4956" size={25} />
        </View>
      </View>
      {/* in stock */}
      <View style={tw`flex-row mt-4  items-center`}>
        <View style={tw`bg-[#8AFFD5] p-2 rounded-2xl mr-3 `}>
          <Text style={tw`text-black font-bold`}>25 % off</Text>
        </View>
        <Text style={tw`text-[15px] text-gray-600 `}>In Stock</Text>
      </View>
    </View>
  );
};

export default PriceComponent;
