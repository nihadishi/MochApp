import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import Init_Routes from './routes/Init_Routes'

const Main = () => {
    useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    
      
    }, [])
    
  return (
    <Init_Routes/>
  )
}

export default Main