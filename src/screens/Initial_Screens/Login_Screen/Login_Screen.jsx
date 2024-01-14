import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import CheckBox from '@react-native-community/checkbox';
import GoogleSvg from '../../../assets/images/svgs/google.svg';
import AppleSvg from '../../../assets/images/svgs/apple.svg';
import EyeOpen from '../../../assets/images/svgs/eye_open.svg';
import CloseEye from '../../../assets/images/svgs/eye_close.svg';
const Login_Screen = ({navigation}) => {
  const [showPassword, setshowPassword] = useState(true);
  const [inputDatas, setinputDatas] = useState({
    email: '',
    password: '',
    remember: false,
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
  const handleSubmit = value => {
    navigation.navigate('Main');
  };
  return (
    <ScrollView style={styles.main}>
      <Text style={styles.mainText}>Log in</Text>

      <View style={styles.inputArea}>
        <View style={styles.input}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={styles.inputTextInput}
            value={inputDatas.email}
            cursorColor={'#732BAC'}
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
              cursorColor={'#732BAC'}
              onChangeText={handlePaswdChange}
              secureTextEntry={showPassword}
            />
            {HideShowPassword()}
          </View>
        </View>
        <View style={styles.checkBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              tintColors={{true: '#732BAC', false: '#808080'}}
              value={inputDatas.remember}
              onValueChange={handleCheckboxChange}
            />
            <Text style={styles.checkBoxText}>Remember me</Text>
          </View>
          <TouchableHighlight>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableHighlight>
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
        <TouchableHighlight underlayColor={'transparent'} onPress={handleSubmit}>
          <Text style={styles.confirm}>Continue</Text>
        </TouchableHighlight>

        <View style={styles.goTo}>
          <Text style={styles.goToText}>Don't have an account?</Text>
          <TouchableHighlight
            onPress={() => navigation.navigate('Signup')}
            underlayColor={'transparent'}>
            <Text style={[styles.goToText, styles.goToSignup]}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login_Screen;
