import { View, StatusBar, Text, FlatList } from "react-native";
import React from "react";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import { InputData } from "../../constants/inputData";
import InputItemData from "./InputItemData";

const SetUpScreen = () => {
  const navigation = useNavigation();

  return (
    <BackgroundImage source={IMAGE.BLACK_IMAGE}>
      <StatusBar
        animated={false}
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
      />
      <View style={{ marginTop: 30 }}>
        <CustomHeader
          backImage={IMAGE.BACK_ARROW}
          title="PIXY RIGHT"
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          SOCIAL
        </Text>
      </View>
      <View>
        <FlatList
          data={InputData}
          renderItem={({ item }) => <InputItemData item={item} />}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="never"
        />
      </View>
    </BackgroundImage>
  );
};

export default SetUpScreen;
