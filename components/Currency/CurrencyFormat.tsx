import { View, Text } from "react-native";
import tailwind from "twrnc";

interface Props {
  value: number;
}

const CurrencyFormat = ({ value }: Props) => {
  const Price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return <Text style={tailwind`text-black font-semibold`}>{Price}</Text>;
};

export default CurrencyFormat;
