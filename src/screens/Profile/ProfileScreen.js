import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Dimensions,
} from "react-native";
import Colors from "../../constants/Colors";
import { useSelector, useDispatch } from "react-redux";
import TextUI from "../../components/Text/TextUI"
import Axios from "axios";
import { API_URL } from "../../constants/API";
import Button from "../../components/Button/Button"
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: "white"
    }
});

export default ({ navigation }) => {
    const userSelector = useSelector(state => state.user)
    const [postCount, setPostCount] = useState(0)

    const dispatch = useDispatch();

    useEffect(() => {
        Axios.get(`${API_URL}/posts`, {
            params: {
                UserId: userSelector.id
            }
        })
            .then(res => {
                setPostCount(res.data.result.length)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    const logoutHandler = () => {
        //asyncstorage == cookie
        AsyncStorage.removeItem("userData")
            .then(result => {
                dispatch({
                    type: "USER_LOGOUT"
                })
                console.log("logout")
            })
            .catch(e => {
                console.log(e)
            })
    }

    return (
        <View style={{ ...styles.container }}>
            <TextUI size="lg" accent bold>{userSelector.username}</TextUI>
            <Button size="md" onPress={logoutHandler} style={{paddingTop: 12}}>LOGOUT</Button>
        </View>
    );
};