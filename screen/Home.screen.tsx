import { View, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import tw from "twrnc";
import SearchBar from "../components/searchBar/SearchBar";
import HotDeals from "../components/Hot deals/HotDeals";
import PopularCategory from "../components/Popular category/PopularCategory";
import Banner from "../components/Banner/Banner";
import { LinearGradient } from "expo-linear-gradient";
import BalanceInfo from "../components/Balance/BalanceInfo";

const HomeScreen = () => {
  return (
    <View style={tw` flex-1 bg-white `}>
      <View style={tw`bg-[#1A232E]  rounded-b-xl `}>
        <Header />
        {/* Search bar */}
        <SearchBar />
        {/* Balance */}
        <BalanceInfo />
      </View>

      <View style={tw`w-full  border-b  mt-2 border-[#f5f5f5]`} />

      <ScrollView   showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <Banner />
        {/* not details */}
        <HotDeals />

        {/* Popular  */}
        <PopularCategory />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
