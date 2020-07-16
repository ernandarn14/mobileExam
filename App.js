import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from './src/redux/reducers';
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import RootNavigator from './src/navigators/RootNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}


