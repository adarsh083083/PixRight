import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../../constants/routes";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableHighlight
        style={{ backgroundColor: "green" }}
        onPress={() => navigation.navigate(Routes.SETUP_SCREEN)}
      >
        <Text>hello how are you </Text>
      </TouchableHighlight>
    </View>
  );
};

export default HomeScreen;
