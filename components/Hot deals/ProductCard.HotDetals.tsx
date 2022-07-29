import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { Product } from "../../lib/dummy.data";
import CurrencyFormat from "../Currency/CurrencyFormat";
enum style {
  wrapper = "mt-8 ",
  productName = "font-semibold text-[15px]",
  lightText = " text-gray-400 mt-1",
}

interface CardProps {
  item: Product;
}

const ProductCard = ({ item }: CardProps) => {
  console.log(item.image);
  return (
    <View style={tw`bg-[#eee]  mx-2  p-2 rounded-xl w-[280px]  mt-4`}>
      <View style={tw`bg-white relative items-center   pb-2 rounded-lg`}>
        <Image source={{ uri: item.image }} style={tw`h-[220px]  w-[180px]`} />
        {/* start Icons */}
        <Icon
          name="heart"
          style={tw`absolute right-0 m-4`}
          size={20}
          color="#f2f2f2"
        />
      </View>
      {/* Details */}
      <View style={tw`mt-2 flex-row justify-between px-2`}>
        {/* brand and name */}
        <View>
          <Text style={tw`${style.productName}`}>{item.name}</Text>
          <Text style={tw`${style.lightText}`}>{item?.brand}</Text>
        </View>
        {/* price and offer time */}
        <View>
          <CurrencyFormat value={item.price} />
          <Text style={tw`${style.lightText}`}>4h 30m</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
