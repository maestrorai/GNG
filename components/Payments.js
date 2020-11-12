import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class Payment extends React.Component {
  render(){
    return (
      <View style={styles.payment}>

        <Text style={styles.header}>Add Payment Info</Text>
        
        <TextInput style={styles.textinput} placeholder= "Enter Payment"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder= "Enter your email"
        underlineColorAndroid={'transparent'} />

        <TextInput style={styles.textinput} placeholder= "create password"
        secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  payment: {
      alignSelf: 'stretch',
  },
  header: {
      fontSize: 30,      
      color:'#fff',
      paddingBottom: 100,
      marginBottom: 100,
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,

  },
  textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1,
  },
button: {
    alignSelf: 'stretch',
    alignItems:'center',
    padding: 20,
    borderRadius: 50,
    backgroundColor: '#8D559B',
    marginTop: 30,
},
btntext: {
    color: '#fff',
    fontWeight: 'bold',
}

});

/* This page i reserved for payment info screen , as part of registration... so after regform page a button below will say proceed... then it goes to this page with adding payment info. But have not completed it