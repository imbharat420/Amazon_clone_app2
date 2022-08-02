import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import { dummy_HotDeals, ProductProps } from "../../lib/dummy.data";
import ProductCard from "./ProductCard.HotDetals";
import { fetchCurrentDeals } from "../../lib/Deals.sanity";
enum style {
  wrapper = "mt-2 px-4 ",
  title = "text-2xl font-medium",
  headerContainer = "flex  flex-row justify-between items-center ",
}

const HotDeals = () => {
  const [DealProducts, setDealProduct] = React.useState<any>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetchCurrentDeals();
      setDealProduct(res);
    };
    fetchData();
  }, []);

  // console.log("deals", DealProducts[0]?.products);

  return (
    <View style={tw`${style.wrapper} `}>
      {/* title and show All */}
      <View style={tw`${style.headerContainer}`}>
        <Text style={tw`${style.title}`}>HotDeals</Text>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-[#ff5903] mr-2`}>Show All</Text>
          {/* right Arrow */}
          <Icon size={18} name="angle-right" color="#ff5903" />
        </View>
      </View>
      {/* Products */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DealProducts[0]?.products?.map(
          (product: ProductProps, idx: number) => (
            <ProductCard item={product} key={idx} />
          )
        )}
      </ScrollView>
    </View>
  );
};

export default HotDeals;

1;
