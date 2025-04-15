import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import CarComponent from '../components/CarComponent'

const Home = () => {
  return (
    <View>

      <Text>Home Page</Text>
          <CarComponent/>
      
      
    </View>
  )
}

export default Home