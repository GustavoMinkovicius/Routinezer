import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from 'firebase'
import {getData} from '../services/file.js'
import {getTasks} from  '../services/tasks'

export default class Logout extends Component {
    componentDidMount(){
      var id = getData("user_id")
      getTasks(id)
        firebase.default.auth().signOut().then(function() {
          console.log('Signed Out');
        }, function(error) {
          console.error('Sign Out Error', error);
        });
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
