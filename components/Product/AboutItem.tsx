import { View, Text } from "react-native";
import React from "react";
import tailwind from "twrnc";

interface Props {
  features: string[];
}

const AboutItem = ({ features }: Props) => {
  return (
    <View
      style={tailwind`bg-[#eee] rounded-md p-4  max-w-[350px] mt-5 mx-auto `}
    >
      <Text style={tailwind`text-black font-semibold text-2xl`}>
        About this item
      </Text>
      {features.map((feature: string, index: number) => {
        return (
          <Text
            key={index}
            style={tailwind`text-sm my-2 text-gray-600 font-medium`}
          >
            <Text style={tailwind` text-black`}>•</Text> {feature}
          </Text>
        );
      })}
    </View>
  );
};

export default AboutItem;
