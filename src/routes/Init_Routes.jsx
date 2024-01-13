import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login_Screen from '../screens/Initial_Screens/Login_Screen/Login_Screen'
import Signup_Screen from '../screens/Initial_Screens/Signup_Screen/Signup_Screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const Init_Routes = () => {
    const screens = [
        {
            name:"Login",
            component: Login_Screen,
        },
        {
            name:"Signup",
            component: Signup_Screen,
        },
    ]
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            {
                 screens.map((screen) => (
                    <Stack.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={{
                            headerShown: false,
                        }}
                    />
                ))
            }
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Init_Routes