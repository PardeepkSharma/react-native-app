import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { bgStore } from "../store/store";
const colors=['red','green','blue','pink','yellow']
const BGColorComponent = () => {
      const color=bgStore(state=>state.color)
      const handlePress=bgStore(state=>state.setColor)

      const [colorName,setColorName]=useState('')

    // const [color,setColor]=useState('')
    // const handlePress=(color:string)=>{
    //     setColor(color)
    // }
  return (
    <View style={{backgroundColor:color,height:'100%'}}>
      <Text>Pick Color</Text>
      
      <Text style={{fontWeight:'bold'}}>{colorName}</Text>
      <View style={styles.outerContainer}>
        {colors.map((item,index)=>{
            return <TouchableOpacity key={index} onPress={() =>{
              setColorName(item)
              handlePress(item)
            } }>
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
