import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const Main = () => {
    useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    
      
    }, [])
    
  return (
    <View>
      <Text>Main</Text>
    </View>
  )
}

export default Main