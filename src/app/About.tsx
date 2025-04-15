import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import WeatherComponent from '../components/WeatherComponent'

const About = () => {
  return (
    <View>

      <Text>About Page</Text>
      <Link href={{pathname:'/user/[id]',params:{id:"pardeep"}}}>go to user</Link>
    <WeatherComponent/>

    </View>
  )
}

export default About