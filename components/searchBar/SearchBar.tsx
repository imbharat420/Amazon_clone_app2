import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={tw`px-4 mt-6`}>
      <View style={tw`flex-row bg-[#eee]   p-3 py-4 rounded-xl  `}>
        <TextInput
          placeholder="What are you looking for ?"
          style={tw`flex-1 `}
          placeholderTextColor="black"
          onChangeText={(text) => setSearch(text)}
        />
        <Icon size={18} name="search" color="black" />
      </View>
    </View>
  );
};

export default SearchBar;
