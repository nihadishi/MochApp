import {View, Text, TextInput, TouchableHighlight, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CheckBox from '@react-native-community/checkbox';
import GoogleSvg from '../../../assets/images/svgs/google.svg';
import AppleSvg from '../../../assets/images/svgs/apple.svg';
import EyeOpen from '../../../assets/images/svgs/eye_open.svg';
import CloseEye from '../../../assets/images/svgs/eye_close.svg';
const Signup_Screen = ({navigation}) => {
  const [showPassword, setshowPassword] = useState(true);
  const [inputDatas, setinputDatas] = useState({
    email: '',
    password: '',
  });
  const handleEmailChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      email: text.toLowerCase(),
    }));
  };
  const handlePaswdChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      password: text,
    }));
  };
  const handleCheckboxChange = value => {
    setinputDatas(prevData => ({
      ...prevData,
      remember: value,
    }));
  };
  const HideShowPassword = value => {
    // setshowPassword(!showPassword);
    return showPassword ? (
      <TouchableHighlight
        style={styles.hideshowPassword}
        underlayColor="transparent"
        onPress={() => {
          setshowPassword(false);
        }}>
        <EyeOpen />
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        style={styles.hideshowPassword}
        underlayColor="transparent"
        onPress={() => {
          setshowPassword(true);
        }}>
        <CloseEye />
      </TouchableHighlight>
    );
  };
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.mainText}>Sign up</Text>

      <View style={styles.inputArea}>
        <View style={styles.input}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.inputTextInput}
            value={inputDatas.email}
            cursorColor={"#732BAC"}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            inputMode="email"
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.inputText}>Password</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.inputTextInput}
              value={inputDatas.password}
              cursorColor={"#732BAC"}
              onChangeText={handlePaswdChange}
              secureTextEntry={showPassword}
            />
            {HideShowPassword()}
          </View>
        </View>
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.or}>or</Text>
        <TouchableHighlight style={styles.inputTextInput}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <GoogleSvg width={30} height={30} />
            <Text style={styles.continueWith}>Continue with Google</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.inputTextInput}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <AppleSvg width={30} height={30} />
            <Text style={styles.continueWith}>Continue with Apple</Text>
          </View>
        </TouchableHighlight>
      </View>

      <View style={styles.inputArea}>
        <TouchableHighlight>
          <Text style={styles.confirm}>Continue</Text>
        </TouchableHighlight>

        <View style={styles.goTo}>
          <Text style={styles.goToText}>Already have an account?</Text>
          <TouchableHighlight onPress={()=>navigation.goBack()} underlayColor={"transparent"}>
            <Text style={[styles.goToText, styles.goToLogin]}>Log in</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup_Screen;
