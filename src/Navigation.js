import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeComponent from './HomePage';
import MypageComponent from './MyPage';
import ResultComponent from './Result';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Icon name="home" color={color} size={20} />
            )
          } else if (route.name === 'MyPage') {
            return (
              <Icon name="user" color={color} size={20} />
            )
          }
          return (
            <Icon name="calendar" color={color} size={20} />
          );
        },
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: '#FFFFFF',
      })}>
        <Tab.Screen name="Home" component={HomeComponent} options={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
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
        <Tab.Screen name="Result" component={ResultComponent} options={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
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
        <Tab.Screen name="MyPage" component={MypageComponent} initialParams={{rootNavigation: navigation}} options={{
          headerShown: false,
          tabBarStyle: {
            height: 80,
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
    </NavigationContainer>
  );
}

export default MyTabs;