import { View, Text, TextInput } from "react-native";
import React from "react";
import tw from "twrnc";

interface InputProps {
  placeholder: string;
  title: string;
  //   onChangeText: (text: string) => void;
  isSecure?: boolean;
}

const Input = ({ placeholder, title, isSecure }: InputProps) => {
  return (
    <View style={tw`mt-4`}>
      <Text style={tw`text-gray-200 px-2 text-[16px]`}>{title}</Text>
      <View style={tw` mt-2 bg-gray-700 rounded-xl `}>
        <TextInput
          style={tw`w-full h-12  rounded-b-sm  text-white px-3  py-2  `}
          placeholder={placeholder}
          placeholderTextColor="#fff"
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
};

export default Input;
