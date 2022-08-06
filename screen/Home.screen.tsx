import { View, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useContext } from "react";
import Header from "../components/Header/Header";
import tw from "twrnc";
import SearchBar from "../components/searchBar/SearchBar";
import HotDeals from "../components/Hot deals/HotDeals";
import PopularCategory from "../components/Popular category/PopularCategory";
import Banner from "../components/Banner/Banner";
import BalanceInfo from "../components/Balance/BalanceInfo";
import Footer from "../components/Footer/Footer";
import { AmazonContext } from "../context/AmazonContext";
import { createUser } from "../lib/User.sanity";

const HomeScreen = () => {
  const { userInfo, AccessToken } = useContext(AmazonContext);
  createUser({
    name: "magesh",
    email: "hariarunengg07@gmail.com",
  });
  console.log();
  return (
    <View style={tw` relative flex-1 bg-white `}>
      <View style={tw`bg-[#1A232E]  rounded-b-xl `}>
        <Header />
        {/* Search bar */}
        <SearchBar />
        {/* Balance */}
        <BalanceInfo />
      </View>

      <View style={tw`w-full  border-b  mt-2 border-[#f5f5f5]`} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <Banner />
        {/* not details */}
        <HotDeals />

        {/* Popular  */}
        <PopularCategory />
      </ScrollView>

      <View
        style={tw`absolute bottom-0 pb-5 items-center bg-[#f5f5f5]  w-full `}
      >
        <Footer />
      </View>
    </View>
  );
};

export default HomeScreen;
