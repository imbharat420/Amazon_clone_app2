import { View, Text, Animated, Image, SafeAreaView } from "react-native";
import React from "react";
import { ProductProps } from "../../lib/dummy.data";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

import tw from "twrnc";

interface PreviewCardProps {
  product: ProductProps;
  idx: number;
}

const PreviewCard = ({ product, idx }: PreviewCardProps) => {
  const AnimateView = Animatable.createAnimatableComponent(View);

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { item: product })}
      style={tw`px-4 justify-center bg-white `}
    >
      <AnimateView
        animation={`fadeInLeftBig`}
        easing="ease-out"
        delay={130 * idx}
        style={tw` h-[120px] relative my-2 justify-around flex-row items-center  rounded-xl bg-[#eee]`}
      >
        <Image
          source={{ uri: product.image }}
          style={tw`h-[100px] rounded-xl  w-[95px]`}
        />
        <View>
          <Text style={tw`text-[15px] text-center`}>{product.name}</Text>
          <Text style={tw`text-sm text-center`}>{product.price}</Text>
        </View>
      </AnimateView>
    </TouchableOpacity>
  );
};

export default PreviewCard;
