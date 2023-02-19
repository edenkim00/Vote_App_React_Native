import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from './HomePage';
// import LoginComponent from './LoginPage';

import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import MypageComponent from './MyPage';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            console.log(size, color)
            return (
              <Icon name="home" color={color} size={20} />
            )
          } else if (route.name === 'MyPage') {
            return (
              <Icon name="user" color={color} size={20} />
            )
          }
          return (
            null
          );
        },
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#FFFFFF',
      })}>
        <Tab.Screen name="Home" component={HomeComponent} options={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingHorizontal: 5,
            paddingTop: 10,
            backgroundColor: '#303030',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            color: '#FFFFFF',
          }

        }} />
        <Tab.Screen name="MyPage" component={MypageComponent} options={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingHorizontal: 5,
            paddingTop: 10,
            backgroundColor: '#303030',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            color: '#FFFFFF',
          }

        }} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

export default MyTabs;