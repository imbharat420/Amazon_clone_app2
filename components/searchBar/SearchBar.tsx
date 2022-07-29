import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
const SearchBar = () => {
  const [search, setSearch] = React.useState("");
  return (
    <View style={tw`px-4 mt-6`}>
      <View style={tw`flex-row bg-[#232E3E]   p-3 py-4 rounded-xl  `}>
        <Icon size={18} name="search" style={tw`mx-2`} color="white" />
        <TextInput
          placeholder="What are you looking for ?"
          style={tw`flex-1  text-white`}
          placeholderTextColor="#eee"
          onChangeText={(text) => setSearch(text)}
        />
        <Icon size={18} name="mic" style={tw`mx-3`} color="white" />
        <Icon2 size={18} name="scan" color="white" />
      </View>
    </View>
  );
};

export default SearchBar;
