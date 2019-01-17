import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignInScreen from './SignInScreen';
//import AuthLoadingScreen from './AuthLoadingScreen';

//const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
//const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  // AuthLoading: AuthLoadingScreen,
  // App: MainTabNavigator,
  // Auth: SignInScreen,
},
{
    //initialRouteName: 'AuthLoading',
}  
));