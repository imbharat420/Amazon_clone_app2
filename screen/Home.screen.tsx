import { View, SafeAreaView, TextInput } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import tw from "twrnc";
import SearchBar from "../components/searchBar/SearchBar";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw` flex-1 bg-white `}>
      <Header />
      <View style={tw`w-full  border-b  mt-2 border-[#f5f5f5]`} />

      {/* search */}
      <SearchBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
