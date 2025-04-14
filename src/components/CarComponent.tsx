import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { listData } from "../util/data";
import st from "../util/style";

const CarComponent = () => {
  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={st.cardStyle}>
              <Text style={st.textStyle}>{item.name}</Text>
              <Image source={{uri:item.image}} style={{width:'100%',height:200,borderRadius:30}}/>
            </View>
          );
        }}
      />
    </View>
  );
};
const Style = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    padding: 15,
    margin: 10,
  },
});
export default CarComponent;
