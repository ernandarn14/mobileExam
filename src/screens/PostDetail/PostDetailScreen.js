import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Colors from "../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../components/General/Header";
import Image from "react-native-scalable-image";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
  iconBtn: {
    fontSize: 24,
    color: "black"
  }
});

export default (props) => {
  const { postDetailData } = props.route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <SafeAreaView />
      <Header {...props} title={postDetailData.restaurantName} />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={{ uri: postDetailData.image }}
        />
        <View style={{ ...styles.commentContainer }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.iconBtn }} type="Entypo" name="star-outlined" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom", color: "black"
              }}
            >
              {postDetailData.rating}
            </TextUI>
          </View>
           <View style={{ flexDirection: "row", alignItems: "center",  marginTop: 11 }}>
            <Icon style={{ ...styles.iconBtn }} type="Entypo" name="location-pin" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom", color: "black"
              }}
            >
              {postDetailData.address}
            </TextUI>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",  marginTop: 11 }}>
          <Icon style={{ ...styles.iconBtn }} type="MaterialCommunityIcons" name="food" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",color: "black"
              }}
            >
             {postDetailData.cuisine}
            </TextUI>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",  marginTop: 11 }}>
          <Icon style={{ ...styles.iconBtn }} type="AntDesign" name="clockcircleo" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom", color: "black"
              }}
            >
            {postDetailData.openTime}
            </TextUI>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center",  marginTop: 11, marginBottom: 55 }}>
          <Icon style={{ ...styles.iconBtn }} type="MaterialCommunityIcons" name="currency-krw" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom", color: "black"
              }}
            >
            {postDetailData.costForTwo} for 2 people
            </TextUI>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};