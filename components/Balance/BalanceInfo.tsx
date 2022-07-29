import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import InfoCard from "./InfoCard";

const BalanceInfo = () => {
  return (
    <View style={tw`pb-6 flex-row   justify-around pt-2 mt-3 px-4`}>
      <InfoCard
        iconName="md-wallet-outline"
        title="Amazon Pay"
        IsOffer={false}
      />
      <InfoCard iconName="local-offer" title="Amazon Pay" IsOffer={true} />
    </View>
  );
};

export default BalanceInfo;
