import React from 'react';
import TextComponent from '../components/TextComponent';
import { View } from 'react-native'
import CarComponent from '../components/CarComponent';
import WeatherComponent from '../components/WeatherComponent';
import BGColorComponent from '../components/BGColorComponent';
import FoodListComponent from '../components/FoodListComponent';
import UserComponent from '../components/UserComponent';
import TodoComponent from '../components/TodoComponent';
import { Link } from 'expo-router';


const index = () => {
  return <View>
    {/* <TextComponent text="My name is pardeep" />
    <TextComponent text="i am a software developer" /> */}
    <BGColorComponent/>
    {/* <UserComponent/> */}
    {/* <TodoComponent/> */}
    {/* <Link href="/Home">Home Screen</Link>
    <Link href="/About">About Screen</Link>
    <Link href="/Contact">Contact Screen</Link> */}
    </View>
}

export default index