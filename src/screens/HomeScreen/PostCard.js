import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import H3 from "../../components/Text/H3";
import TextUI from "../../components/Text/TextUI";
import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  return (
    <View
      onPress={() =>
        navigation.navigate("HomePostDetail", { postDetailData: data })
      }
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
        // flex: 1,
        // flexWrap: 'wrap',
        // alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomePostDetail", { postDetailData: data })
        }>
        <ImageScale
          source={{
            uri: data.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
          width={width - 30}
        />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 13 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.likeBtn }} type="Entypo" name="star-outlined" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              {data.rating}
            </TextUI>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 25,
            paddingBottom: 15,
          }}
        >
          <View>
            <H3 style={{ marginBottom: 4 }} bold>
              {data.restaurantName}
            </H3>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 15,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.likeBtn }} type="Entypo" name="location-pin" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              {data.address}
            </TextUI>
          </View>
        </View>
      </View>
    </View>
  );
};