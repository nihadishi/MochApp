import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home_Screen from '../screens/Main_Screens/Home_Screen/Home_Screen';
import Foryou_Screen from '../screens/Main_Screens/Foryou_Screen/Foryou_Screen';
import Event_Screen from '../screens/Main_Screens/Event_Screen/Event_Screen';
import Library_Screen from '../screens/Main_Screens/Library_Screen/Library_Screen';
import Setting_Screen from '../screens/Main_Screens/Setting_Screen/Setting_Screen';
import HomeIcon from '../assets/images/svgs/tab_home.svg';
import HomeIconFocus from '../assets/images/svgs/tab_home_focus.svg';
import ForyouIcon from '../assets/images/svgs/tab_foryou.svg';
import ForyouIconFocus from '../assets/images/svgs/tab_foryou_focus.svg';
import EventIcon from '../assets/images/svgs/tab_events.svg';
import EventIconFocus from '../assets/images/svgs/tab_events_focus.svg';
import LibraryIcon from '../assets/images/svgs/tab_library.svg';
import LibraryIconFocus from '../assets/images/svgs/tab_library_focus.svg';
import SettingIcon from '../assets/images/svgs/tab_setting.svg';
import SettingIconFocus from '../assets/images/svgs/tab_setting_focus.svg';
import { Main_Routes_Styles } from './styles';
const Tab = createBottomTabNavigator();
const Main_Routes = () => {
  const screens = [
    {
      name: 'Foryou',
      component: Foryou_Screen,
      icon: ForyouIcon,
      iconfocus: ForyouIconFocus,
    },
    {
      name: 'Event',
      component: Event_Screen,
      icon: EventIcon,
      iconfocus: EventIconFocus,
    },
    {
      name: 'Home',
      component: Home_Screen,
      icon: HomeIcon,
      iconfocus: HomeIconFocus,
    },

    {
      name: 'Library',
      component: Library_Screen,
      icon: LibraryIcon,
      iconfocus: LibraryIconFocus,
    },
    {
      name: 'Setting',
      component: Setting_Screen,
      icon: SettingIcon,
      iconfocus: SettingIconFocus,
    },
  ];
  const transitionSpec = {
    open: { animation: 'timing', config: { duration: 300 } },
    close: { animation: 'timing', config: { duration: 300 } },
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: Main_Routes_Styles.tab,
        transitionSpec,
      }}>
      {screens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            tabBarShowLabel:false,
            headerShown:false,
            tabBarIcon: ({focused}) =>(
              <View style={focused? Main_Routes_Styles.tabBarFocus: Main_Routes_Styles.tabBar}>
               { focused ? <screen.iconfocus /> : <screen.icon />}
               <Text style={focused? Main_Routes_Styles.tabTextFocus: Main_Routes_Styles.tabText}>{screen.name}</Text>
              </View>
            )
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Main_Routes;
