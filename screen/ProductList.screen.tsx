import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header/Header";
import { ProductProps } from "../lib/dummy.data";
import { fetchPostByCategory } from "../lib/products.sanity";
import ProductInfo from "../components/Product/ProductInfo";
import PreviewCard from "../components/Product preview card/PreviewCard";
import tw from "twrnc";

const ProductListScreen = () => {
  const { params } = useRoute();
  const { category }: any = params;
  const [products, setProducts] = React.useState<ProductProps[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetchPostByCategory(category);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <View style={tw`flex-1`}>
      <Header />
      <View style={tw`flex-1 bg-white`}>
        {products.map((product, index) => {
          return <PreviewCard idx={index + 1} key={index} product={product} />;
        })}
      </View>
    </View>
  );
};

export default ProductListScreen;
