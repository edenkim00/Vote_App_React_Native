import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Text, Button, Alert } from 'react-native';
import { userInfo } from './api/UserInfo';
import { styles } from './styles';

function MypageComponent({ navigation }) {
  // mypage info 받아오기.
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let [userName, userGrade] = await Promise.all([AsyncStorage.getItem('userName'), AsyncStorage.getItem('userGrade')]);
        if (userName && userGrade) {
          setName(userName);
          setGrade(userGrade);
          setLoading(false);
          return;
        }
        const userInfoData = await userInfo();
        userName = userInfoData.result.name
        userGrade = userInfoData.result.grade
        await Promise.all([AsyncStorage.setItem('userName', userName), AsyncStorage.setItem('userGrade', userGrade)])
        setName(userName);
        setGrade(userGrade);
        setLoading(false);
      } catch (err) {
        Alert.alert('Please try again later.')
        navigation.navigate('Home');
      }
    }
    fetchUserInfo()
  }, []);
  
  return (
    loading ?
      <View style={styles.container} >
        <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
          <Text style={styles.mypage_text_loading}>Loading...</Text>
        </ImageBackground>
      </View>
      :
      <View style={styles.container}>
        <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
          <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sports Hall</Text>
          <Text style={styles.Title}>court vote system</Text>
          <Text style={styles.Title}>@NLCS.JEJU</Text>
          <Text style={{ marginTop: 40 }}></Text>
          <Text style={styles.padding}></Text>
          <Text style={styles.mypage_text}>Name:    {name}</Text>
          <Text style={styles.mypage_text}>Grade:   {grade}</Text>
          <Text style={{ marginTop: 48 }}></Text>
        </ImageBackground>
      </View>

  );
}

export default MypageComponent;