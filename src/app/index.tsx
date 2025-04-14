import React from 'react';
import TextComponent from '../components/TextComponent';
import { View } from 'react-native'
import CarComponent from '../components/CarComponent';
import WeatherComponent from '../components/WeatherComponent';
import BGColorComponent from '../components/BGColorComponent';
import FoodListComponent from '../components/FoodListComponent';
import UserComponent from '../components/UserComponent';
import TodoComponent from '../components/TodoComponent';


const index = () => {
  return <View>
    {/* <TextComponent text="My name is pardeep" />
    <TextComponent text="i am a software developer" /> */}
    {/* <CarComponent/> */}
    {/* <WeatherComponent/> */}
    {/* <BGColorComponent/> */}
    {/* <FoodListComponent/> */}
    {/* <UserComponent/> */}
    <TodoComponent/>
    </View>
}

export default index