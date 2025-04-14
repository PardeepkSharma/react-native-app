import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const colors=['red','green','blue','pink','yellow']
const BGColorComponent = () => {
    const [color,setColor]=useState('')
    const handlePress=(color:string)=>{
        setColor(color)
    }
  return (
    <View style={{backgroundColor:color,height:'100%'}}>
      <Text>Pick Color</Text>
      
      
      <View style={styles.outerContainer}>
        {colors.map((item,index)=>{
            return <TouchableOpacity key={index} onPress={() => handlePress(item)}>
            <View style={{...styles.circlestyle,backgroundColor:item}}></View>
          </TouchableOpacity>
        })}
       </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
    outerContainer:{
        display:"flex",
        flexDirection:"row",
        gap:5
    },
  circlestyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
  }
});

export default BGColorComponent;
