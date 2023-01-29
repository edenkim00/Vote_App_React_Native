import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginPage from './src/LoginPage';
import BottomTab from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
// const Stack = createStackNavigator();
// const WholeStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
//       <Stack.Screen name="BottomTab" component={Homepage} options={{ headerShown: false }} />
//     </Stack.Navigator>
//   )
// }
// const App = () => {
//   return (
//     <NavigationContainer>
//       <WholeStack />
//     </NavigationContainer>
//   )
// }
// export default App;
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Login',
      },
    },
    BottomTab: {
      screen: BottomTab,
      navigationOptions: {
        title: 'Vote Application',
      },
    },
  },
  {
    initialRouteName: 'Login',
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeComponent from './src/HomePage';
// import LoginComponent from './src/LoginPage';
// import { NavigationContainer } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Login" component={LoginComponent} />
//         <Tab.Screen name="Vote" component={HomeComponent} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyTabs;