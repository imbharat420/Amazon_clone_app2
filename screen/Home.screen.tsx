import { View, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import tw from "twrnc";
import SearchBar from "../components/searchBar/SearchBar";
import HotDeals from "../components/Hot deals/HotDeals";
import PopularCategory from "../components/Popular category/PopularCategory";
import Banner from "../components/Banner/Banner";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw` flex-1 bg-white `}>
      <Header />
      <View style={tw`w-full  border-b  mt-2 border-[#f5f5f5]`} />

      {/* search */}
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <Banner />
        {/* not details */}
        <HotDeals />

        {/* Popular  */}
        <PopularCategory />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
