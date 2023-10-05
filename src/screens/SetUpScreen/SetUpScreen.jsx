// import { View, StatusBar, Text, FlatList, ScrollView } from "react-native";
// import React from "react";
// import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
// import { IMAGE } from "../../constants/Images";
// import { useNavigation } from "@react-navigation/native";
// import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
// import { Branding, Business, InputData, Logo } from "../../constants/inputData";
// import InputItemData from "./InputItemData";

// const SetUpScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <BackgroundImage source={IMAGE.BLACK_IMAGE}>
//       <StatusBar
//         animated={false}
//         backgroundColor="transparent"
//         barStyle="light-content"
//         translucent={true}
//         backgroundImage={IMAGE.STATUS_BAR_BACKGROUND}
//       />
//       <View style={{ marginTop: 30 }}>
//         <CustomHeader
//           backImage={IMAGE.BACK_ARROW}
//           title="PIXY RIGHT"
//           onBackPress={() => navigation.goBack()}
//         />
//       </View>
//       <ScrollView style={{ flex: 1 }}>
//         <View style={{ marginTop: 30 }}>
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontSize: 22,
//               fontWeight: "bold",
//             }}
//           >
//             SOCIAL
//           </Text>
//         </View>
//         <View>
//           <FlatList
//             data={InputData}
//             renderItem={({ item }) => <InputItemData item={item} />}
//             keyExtractor={(item) => item.id}
//             keyboardShouldPersistTaps="never"
//           />
//         </View>
//         <View style={{ marginTop: 20 }}>
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontSize: 22,
//               fontWeight: "bold",
//             }}
//           >
//             LOGO
//           </Text>
//         </View>
//         <View>
//           <FlatList
//             data={Logo}
//             renderItem={({ item }) => <InputItemData item={item} />}
//             keyExtractor={(item) => item.id}
//             keyboardShouldPersistTaps="never"
//           />
//         </View>
//         <View style={{ marginTop: 20 }}>
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontSize: 22,
//               fontWeight: "bold",
//             }}
//           >
//             BUSINESS
//           </Text>
//         </View>
//         <View>
//           <FlatList
//             data={Business}
//             renderItem={({ item }) => <InputItemData item={item} />}
//             keyExtractor={(item) => item.id}
//             keyboardShouldPersistTaps="never"
//           />
//         </View>
//         <View style={{ marginTop: 20 }}>
//           <Text
//             style={{
//               color: "white",
//               textAlign: "center",
//               fontSize: 22,
//               fontWeight: "bold",
//             }}
//           >
//             BRANDING
//           </Text>
//         </View>
//         <View>
//           <FlatList
//             data={Branding}
//             renderItem={({ item }) => <InputItemData item={item} />}
//             keyExtractor={(item) => item.id}
//             keyboardShouldPersistTaps="never"
//           />
//         </View>
//       </ScrollView>
//     </BackgroundImage>
//   );
// };

// export default SetUpScreen;
import React from "react";
import { View, StatusBar, Text, FlatList, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import BackgroundImage from "../../components/BackgroundImage/ScreenBackground";
import CustomHeader from "../../components/HeaderAtom/HeaderAtom";
import InputItemData from "./InputItemData";
import { IMAGE } from "../../constants/Images";
import { Branding, Business, InputData, Logo } from "../../constants/inputData";

const Section = ({ title, data }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <InputItemData item={item} />}
        keyExtractor={(item) => item.id}
        keyboardShouldPersistTaps="never"
      />
    </View>
  );
};

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
      <ScrollView style={{ flex: 1 }}>
        <Section title="SOCIAL" data={InputData} />
        <Section title="LOGO" data={Logo} />
        <Section title="BUSINESS" data={Business} />
        <Section title="BRANDING" data={Branding} />
      </ScrollView>
    </BackgroundImage>
  );
};

export default SetUpScreen;
