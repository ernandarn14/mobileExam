import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import Colors  from "../constants/Colors";
import { Icon } from "native-base";
import { Dimensions } from "react-native";


const { width } = Dimensions.get("screen")

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        style: {
            backgroundColor: "white",
            borderTopWidth: 0,
            paddingTop: 4,
        }
    }}>
      <Tab.Screen name="Home" component={HomeStack} options={{
          tabBarIcon: ({color, size}) => 
          <Icon type="Entypo" name="home" style={{color}}/>
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ({color, size}) => 
          <Icon type="MaterialIcons" name="restaurant-menu" style={{color}}/>
      }}/>
    </Tab.Navigator>
  );
};