import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
const SearchBar = () => {
  return (
    <View style={tw`px-4 mt-6`}>
      <View style={tw`flex-row bg-[#eee]   p-3 py-4 rounded-xl  `}>
        <TextInput
          placeholder="What are you looking for ?"
          style={tw`flex-1 placeholder:text-black text-black `}
          placeholderTextColor="black"
        />
        <Icon size={18} name="search" color="black" />
      </View>
    </View>
  );
};

export default SearchBar;
