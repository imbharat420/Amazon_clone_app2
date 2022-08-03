import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { fetchPostByCategory } from "../../lib/products.sanity";
import { useNavigation } from "@react-navigation/native";
enum style {
  wrapper = "bg-[#eee] my-2 p-4 flex-row rounded-lg items-center justify-between",
  Icon = "bg-white h-9 items-center justify-center w-9 rounded-md",
}

interface CardProps {
  card: {
    Icon: string;
    name: string;
    slug: string;
  };
}

const CategoryCard = ({ card }: CardProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductList", { category: card.slug });
      }}
      style={tailwind`${style.wrapper}`}
    >
      {/* Icon */}
      <View style={tailwind`${style.Icon}`}>
        <Icon name={card.Icon} size={20} color="black" />
      </View>
      {/* name */}
      <Text style={tailwind`font-bold`}>{card.name}</Text>
      {/* Arrow Icons */}
      <Icon2 size={18} name="angle-right" color="#ff5903" />
    </TouchableOpacity>
  );
};

export default CategoryCard;
