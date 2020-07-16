import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Button/Button";
import LoginBG from "../../assets/images/login_bg.png";
// import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage"
import { Icon } from "native-base";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 34,
    lineHeight: 40,
    height: 34,
    color: "red",
    textAlign: "center",
  },
  loginText: {
    marginTop: 12,
  },
  icon: {
    fontSize: 60,
    color: "red",
    textAlign: "center",
  },
});

export default (props) => {
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  const loginBtnHandler = () => {
          AsyncStorage.setItem("userData", JSON.stringify({
            username,
            id
          }))
            .then(() => {
              dispatch({
                type: "USER_LOGIN",
                payload: { username, id },
              });
            })
            .catch(err => {
              console.log(err)
            })
  };

  return (
    <ImageBackground style={{ ...styles.bgImage }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}
        >
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>TomatoApp</TextUI>
            <Icon style={{ ...styles.icon }} type="MaterialCommunityIcons" name="food" />
            <View
              style={{
                borderRadius: 22,
                paddingVertical: 11,
                paddingHorizontal: 20,
                justifyContent: "center",
                marginTop: 58,
              }}
            >
              <View
                style={{
                  backgroundColor: "grey",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="black"
                style={{
                  fontSize: 17,
                  color: "black",
                  lineHeight: 19,
                }}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <Button
              onPress={loginBtnHandler}
              containerStyle={{ marginTop: 40 }}
              size="lg"
            >
              ENTER
            </Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

