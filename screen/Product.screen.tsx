import { SafeAreaView, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tw from "twrnc";
import HeaderProduct from "../components/Product/Header.product";
import tailwind from "twrnc";
import ProductInfo from "../components/Product/ProductInfo";
import ProductFooter from "../components/Product/ProductFooter";
import { ScrollView } from "react-native-gesture-handler";
import AboutItem from "../components/Product/AboutItem";

interface Props {
  item: {
    name: string;
    brand: string;
    price: number;
    image: string;
    description: string;
    category: string;
    productImage: string[];
    About: string[];
  };
}

const ProductScreen = () => {
  const { params }: any = useRoute();
  const { item }: Props = params;
  const navigation = useNavigation();
  console.log("item", item);
  return (
    <SafeAreaView style={tw`relative bg-white flex-1`}>
      {/* Header */}
      <HeaderProduct />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductInfo item={item} />
      </ScrollView>

      <View style={tw`absolute bottom-0 -mt-4 w-full `}>
        <ProductFooter />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
