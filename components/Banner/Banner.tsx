import { View, Text, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { SliderBox } from "react-native-image-slider-box";
import { bannerImages } from "../../lib/dummy.data";

const Banner = () => {
  return (
    <View style={tailwind`px-4 items-center h-[200px]  my-4`}>
      <SliderBox
        images={bannerImages}
        sliderBoxHeight={200}
        onCurrentImagePressed={(index) => console.log(index)}
        paginationBoxVerticalPadding={20}
        autoplay
        resizeMethod={"resize"}
        resizeMode={"cover"}
        ImageComponentStyle={tailwind` w-[90%] rounded-lg`}
        circleLoop
      />
    </View>
  );
};

export default Banner;
