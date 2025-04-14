import { View, Text } from 'react-native'
import React from 'react'
import st from '../util/style'
type TextComponentProps={
text:string,
}
const TextComponent = ({ text }: TextComponentProps) => {
  return (
    <View>
      <Text style={st.textStyle}>{text}</Text>
    </View>
  )
}

export default TextComponent