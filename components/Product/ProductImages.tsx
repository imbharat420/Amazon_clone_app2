import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const ProductImages = ({ productImage }: any) => {
  console.log("productImage", productImage);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
      style={tw`mt-6 `}
    >
      {productImage.map((image: string, index: number) => (
        <View key={index} style={tw`w-[350px]  items-center  rounded-md mr-4 `}>
          <Image
            source={{ uri: image }}
            style={tw`w-[190px] h-[200px]  rounded-md`}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductImages;
