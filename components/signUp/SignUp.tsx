import { View, Text, Image, TextInput } from "react-native";
import React, { useRef } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";
import Input from "../Input /Input.Component";
import { SingUp } from "../../firebase/firebase";
import { useNavigation } from "@react-navigation/native";

interface Props {
  setSignIn: (signIn: boolean) => void;
}

const SignUp = ({ setSignIn }: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const navigation = useNavigation();
  const handleSignUp = async () => {
    const user = {
      name,
      email,
      password,
    };
    SingUp(user).then(() => {
      navigation.navigate("Home");
    });
  };

  return (
    <View style={tw`w-full `}>
      {/* Input */}

      <View style={tw` mt-8   px-4`}>
        <Input
          InputState={setName}
          placeholder=" name"
          title="Your name"
          isSecure={false}
        />
        <Input
          InputState={setEmail}
          placeholder="email"
          title="Email"
          isSecure={false}
        />
        <Input
          InputState={setPassword}
          placeholder="At least 6 character"
          title="Password"
          isSecure={true}
        />
        <Input
          InputState={setConfirmPassword}
          placeholder="At least 6 character"
          title="Re-enter Password"
          isSecure={true}
        />
      </View>
      {/* Button */}
      <TouchableOpacity
        onPress={handleSignUp}
        style={tw`mx-4 bg-sky-500 py-3 mt-4 rounded-xl `}
      >
        <Text style={tw`rounded-xl  text-center font-bold text-white `}>
          Register
        </Text>
      </TouchableOpacity>
      {/* conditions*/}
      <View>
        <Text style={tw`px-5 text-white text-center font-semibold mt-4`}>
          By continuing, you agree to Amazon's
          <Text style={tw`text-sky-400 font-semibold`}>Conditions of Use </Text>
          and{" "}
          <Text style={tw`text-sky-400 font-semibold`}> Privacy Notice.</Text>
        </Text>
      </View>

      {/* Already have an account */}
      <View style={tw`px-4 `}>
        <Text style={tw`px-5 text-white text-center font-semibold mt-4`}>
          Already have an account?
        </Text>
        <TouchableOpacity
          onPress={() => setSignIn(true)}
          style={tw`bg-sky-400 bg-opacity-30  mt-4  py-3 rounded-xl items-center`}
        >
          <Text style={tw`  text-sky-400  font-bold`}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
