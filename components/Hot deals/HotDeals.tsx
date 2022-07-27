import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { dummy_HotDeals, Product } from "../../lib/Product.data";
import ProductCard from "./ProductCard.HotDetals";
enum style {
  wrapper = "mt-8 px-6 ",
  title = "text-2xl font-bold ",
  headerContainer = "flex  flex-row justify-between items-center ",
}

const HotDeals = () => {
  return (
    <View style={tw`mt-8 px-4 `}>
      {/* title and show All */}
      <View style={tw`${style.headerContainer}`}>
        <Text style={tw`${style.title}`}>HotDeals</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[#ff5903] mr-2`}>Show All</Text>
          {/* right Arrow */}
          <Icon size={18} name="angle-right" color="#ff5903" />
        </View>
      </View>
      {/* Products */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dummy_HotDeals?.map((product: Product, idx: number) => (
          <ProductCard item={product} key={idx} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HotDeals;
