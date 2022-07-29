import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import tw from "twrnc";
import CurrencyFormat from "../Currency/CurrencyFormat";
import Icon2 from "react-native-vector-icons/MaterialIcons";
interface Props {
  iconName: string;
  title: string;
  IsOffer: boolean;
}

const InfoCard = ({ iconName, title, IsOffer }: Props) => {
  return (
    <View style={tw`flex-row`}>
      {IsOffer ? (
        <Icon2
          size={24}
          name={iconName}
          style={tw`mr-4   my-auto`}
          color="#FD9A25"
        />
      ) : (
        <Icon
          size={30}
          name={iconName}
          style={tw`mr-4   my-auto`}
          color="#FD9A25"
        />
      )}

      <View>
        <View>
          <Text style={tw`text-white`}>{title}</Text>

          {IsOffer ? (
            <Text style={tw`text-white text-lg font-medium`}>20 offers</Text>
          ) : (
            <CurrencyFormat value={20} color="white" TextSize="lg" />
          )}
        </View>
      </View>
    </View>
  );
};

export default InfoCard;
