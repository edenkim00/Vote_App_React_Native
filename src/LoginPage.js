import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from './api/Login';

function LoginComponent({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // TODELTE 
    // navigation.navigate('Home')

    const domain = email.split('@')[1]
    // if (domain != 'pupils.nlcsjeju.kr') {
    //   alert('이메일 형식이 맞지 않습니다.')
    //   return
    // }
    // if (password.length < 4 || password.length > 12) {
    //   alert('비밀번호는 4-12글자여야 합니다')
    //   return
    // }
    // const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // if (email.match(emailRegExp) == null) {
    //   alert('이메일 형식을 지켜주세요');
    //   return
    // }

    // const apiResult = await postLogin(email, password);
    // console.log(apiResult)
    // // success = 1000
    // if (apiResult.code == 1000) {
    //   const loginInfo = apiResult.result;
    //   await AsyncStorage.setItem('loginInfo', JSON.stringify(loginInfo));
    //   alert("로그인에 성공하였습니다.");
    // } else if (apiResult.code == 3001) {
    //   alert("잘못된 아이디 또는 비밀번호를 입력하셨습니다. 아이디 비밀번호를 다시 확인해주세요.");
    // }
    navigation.navigate('BottomTab')

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
        <View style={styles.button}>
          <Button title="Login" onPress={handleLogin} color='#FFFFFF' />
        </View>
      </ImageBackground>
    </View>
  );
}

export default LoginComponent;
