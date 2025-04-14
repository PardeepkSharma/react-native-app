import { View, Text, TextInput, Button,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { weatherData } from '../util/data'
interface weatherDataTypes{
    id:number,
    city:string,
    temp:number,
    desc:string
}
const WeatherComponent = () => {
    const [city,setCity]=useState('')
    const [result,setResult]=useState<weatherDataTypes| null>()

    useEffect(()=>{
        setResult(null)
    },[city])
   const getWeather=()=>{
    const fetchResult=weatherData.find(item=>item.city==city.toLowerCase())
        setResult(fetchResult)
   }
  return (
    <View>
      <Text>Weather App</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder='Enter City'/>
      {result===undefined ? <Text>Data not found!</Text> :<Text>{result?.temp},{result?.desc}</Text>}
      <Button title='Get Data' onPress={getWeather}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 50,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
        width:'95%',
      height: 40,
      borderColor: '#888',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      margin:'auto'
    },
    output: {
      marginTop: 10,
      fontSize: 16,
    },
  });
export default WeatherComponent