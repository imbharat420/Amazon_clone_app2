import { View, Text, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";

import ProductImages from "./ProductImages";
import PriceComponent from "./Price.component";
import ReviewComponent from "./Review.component";
import AboutItem from "./AboutItem";
const ProductInfo = ({ item }: any) => {
  return (
    <View style={tw`px-4 pb-[100px]`}>
      <ProductImages productImage={item.productImage} />

      {/*  Price */}
      <PriceComponent price={item.price} />
      {/* Name */}
      <Text style={tw`text-black mt-4 font-semibold text-2xl`}>
        {item.name}
      </Text>
      {/* Description */}
      <View style={tw`mt-5`}>
        <Text style={tw`text-gray-600 text-sm font-medium`}>
          {item.description}
        </Text>
      </View>
      {/* star */}
      <ReviewComponent item={item} />
      {/* feature */}

      <AboutItem features={item.features} />
    </View>
  );
};

export default ProductInfo;
