import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MapView } from "expo";
/*import Navigator from './routes/homeStack'; */

import Regform from "./components/Regform";
import Payment from "./components/Payment";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Regform />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#AB79B9",
    paddingLeft: 60,
    paddingRight: 60
  }
});

/*return (
  <View style={styles.container}>        
    <Payment/>
  </View>
);

/*<Regform/> 
*/
