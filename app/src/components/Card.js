import React, { Component } from "react";
import { Text,View ,StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        shadowColor: 'black',
        shadowOpacity: 0.23,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        shadowRadius: 10,
        borderRadius: 3,
        backgroundColor: '#fff',
        height:185,
        width:'90%',
       
        marginHorizontal:20,
      
        
    }
})
export default Card;
