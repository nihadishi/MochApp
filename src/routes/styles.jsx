import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../assets/default_styles';
export const Init_Routes_Styles = StyleSheet.create({});
export const Main_Routes_Styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    borderRadius: 15,
    height: 90,
    backgroundColor: Colors.white,
    shadowColor: Colors.secondary,    
    elevation: 50,
  },
  tabBar: {
    alignItems: 'center',
    justifyContent: 'space-around',
    top: 5,
  },
  tabBarFocus: {
    bottom: 3,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabText: {
    color: Colors.black,
    fontFamily: Fonts.normal,
  },
  tabTextFocus: {
    color: Colors.secondary,
    fontFamily: Fonts.normal,
  },
});
