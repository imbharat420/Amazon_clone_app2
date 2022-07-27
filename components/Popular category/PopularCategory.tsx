import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { dummy_category } from "../../lib/dummy.data";
import CategoryCard from "./Category.card";
enum style {
  wrapper = "mt-8 px-4 ",
  title = "text-2xl font-medium",
  headerContainer = "flex  flex-row justify-between items-center ",
}

const PopularCategory = () => {
  return (
    <View style={tw`${style.wrapper}`}>
      <Text style={tw`${style.title}`}>PopularCategory</Text>

      {dummy_category?.map(
        (category, idx) => (<CategoryCard card={category} key={idx} />) as any
      )}
    </View>
  );
};

export default PopularCategory;
