import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,
    TextInput, TouchableOpacity
} from "react-native";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import PostCard from "./PostCard";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { Icon } from "native-base";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    header: {
        textAlign: "right"
    },
    headers: {
        height: 50,
        flexDirection: "row",
        paddingHorizontal: 18,
        alignItems: "center",
        backgroundColor: "red"
    },
});

export default ({ navigation }) => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        Axios.get(`${API_URL}/restaurants`)
            .then((res) => {
                console.log(res.data);
                setPostList(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const renderPosts = ({ item }) => {
        return <PostCard navigation={navigation} data={item} />;
    };

    const userSelector = useSelector((state) => state.user);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                marginBottom: 15
            }}
        >
            <SafeAreaView />
            <View style={{ ...styles.headers }}>
                <Icon
                    type="AntDesign"
                    name="user"
                    style={{
                        color: "white",
                    }}
                />
                <TextUI style={{ flex: 1, textAlign: "right", color: "white" }} bold>
                    {`Halo, ` + userSelector.username}
                </TextUI>
            </View>
            <FlatList
                ListHeaderComponent={() => {
                    return <H1 bold style={{ color: "black" }}>Restaurant List</H1>;
                }}
                ListHeaderComponentStyle={{ marginHorizontal: 15 }}
                contentContainerStyle={{ marginTop: 46 }}
                data={postList}
                // numColumns={2}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
