import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login_Screen from '../screens/Initial_Screens/Login_Screen/Login_Screen';
import Signup_Screen from '../screens/Initial_Screens/Signup_Screen/Signup_Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main_Routes from './Main_Routes';
const Stack = createNativeStackNavigator();
const Init_Routes = () => {
  const screens = [
    {
      name: 'Login',
      component: Login_Screen,
      options: { ...MyCustomTransition, headerShown: false },
    },
    {
      name: 'Signup',
      component: Signup_Screen,
      options:{ ...MyCustomTransition, headerShown: false },
    },
    {
      name: 'Main',
      component: Main_Routes,
      options:{ ...MyCustomTransition, headerShown: false },
    },
  ];
  const MyCustomTransition = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              translateX: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -layouts.screen.width],
                  })
                : 1,
            },
          ],
        },
        headerShown: false,
      };
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {screens.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Init_Routes;
