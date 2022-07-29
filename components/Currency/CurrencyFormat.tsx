import { View, Text } from "react-native";
import tailwind from "twrnc";

interface Props {
  value: number;
  color?: string;
  TextSize?: string;
}

const CurrencyFormat = ({ value, color = "black", TextSize = "sm" }: Props) => {
  const Price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

  return (
    <Text style={tailwind`text-${color} text-${TextSize} font-semibold`}>
      {Price}
    </Text>
  );
};

export default CurrencyFormat;
