import React, { useState } from 'react';
import { Alert, View, Text, TextInput, Button, ImageBackground } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from './api/Login';

function LoginComponent({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const domain = email.split('@')[1]
    if (domain != 'pupils.nlcsjeju.kr') {
      Alert.alert('This is not a school email.')
      return
    }
    if (password.length < 4 || password.length > 12) {
      Alert.alert('Password should be 4-12 characters.')
      return
    }
    const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (email.match(emailRegExp) == null) {
      Alert.alert('Please type the correct email.');
      return
    }
    const apiResult = await postLogin(email, password);
    console.log(apiResult);
    if (apiResult.code === 1000) {
      const loginInfo = apiResult.result;
      await Promise.all([AsyncStorage.setItem('loginInfo', JSON.stringify(loginInfo)), AsyncStorage.setItem('email', email)]);
      
      navigation.navigate('BottomTab')
      return;
    } else if (apiResult.code === 3001) {
      Alert.alert("Check the email and password again.");
      return;
    }
    Alert.alert('Login Failed, Try again later.')

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
        <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sports Hall</Text>
        <Text style={styles.Title}>court vote system</Text>
        <Text style={styles.Title}>@NLCS.JEJU</Text>
        <Text style={styles.padding}></Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <View flexDirection='row'>
          <View style={styles.button}>
            <Button title="Login" onPress={handleLogin} color='#FFFFFF' />
          </View>
          <View style={styles.button_signup}>
            <Button title="Sign Up" onPress={() => { navigation.navigate('SignUpPage1') }} color='#FFFFFF' />
          </View>
        </View>
        <View style={styles.button_forgotPassword}>
          <Button title="Forgot Password" onPress={() => { navigation.navigate('PasswordPage1') }} color='#FFFFFF' />
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginComponent;
