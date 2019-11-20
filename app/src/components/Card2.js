import React, { Component } from "react";
import { Text,View ,StyleSheet,TouchableNativeFeedback,TouchableOpacity,Platform } from "react-native";

const Card2 = props => {
  let TouchableCmp = TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version >= 21){
    TouchableCmp.TouchableNativeFeedback
  }
  return (
    <TouchableCmp style={{ ...styles.container, ...props.style }}>
      {props.children}
    </TouchableCmp>
  );
};
const styles = StyleSheet.create({
    container:{
        shadowColor: 'black',
        shadowOpacity: 0.23,
        shadowOffset: {width: 0, height: 2},
        elevation: 5,
        shadowRadius: 10,
        borderRadius: 7,
        backgroundColor: '#fff',
        height:210,
        width:150,
       
        marginHorizontal:8,
        borderWidth:0.3,
        borderColor:'#707070'
      
        
    }
})
export default Card2;
