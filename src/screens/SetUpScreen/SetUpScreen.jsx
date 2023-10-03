import { View, Text, StatusBar } from "react-native";
import React from "react";
import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import { IMAGE } from "../../constants/Images";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";

const SetUpScreen = () => {
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
        <CustomHeader backImage={IMAGE.BACK_ARROW} title={"PIXY RIGHT"} />
      </View>
    </BackgroundImage>
  );
};

export default SetUpScreen;
