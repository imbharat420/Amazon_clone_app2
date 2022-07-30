import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import StarRating from "react-native-star-rating";
const ReviewComponent = ({ item }:any) => {
  return (
    <View style={tw`mt-5 w-[150px] flex-row`}>
      <View style={tw`  flex-row`}>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={item.star}
          starSize={20}
          fullStarColor={"#FF9900"}
        />
        <Text style={tw`text-gray-800 text-sm font-bold ml-2`}>
          {item.star}
        </Text>
      </View>
      {/* rating */}
      <Text style={tw`text-gray-600 text-sm font-medium ml-2`}>
        ({item.no_of_reviews} Reviews)
      </Text>
    </View>
  );
};

export default ReviewComponent;
