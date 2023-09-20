import StackNavigator from './src/navigation/StackNavigator'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import React from 'react'

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return <StackNavigator />
}