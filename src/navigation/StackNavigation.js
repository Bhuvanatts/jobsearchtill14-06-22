import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import {LoginScreen, RegisterScreen,Dashboard,ResetPasswordScreen, StartScreen} from "../screens"
import Joblist from "../screens/JoblistScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator()

const StackNavigation=()=>{
    return(
        <Stack.Navigator
          initialRouteName="Tab"
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Tab" component={BottomTabNavigator} /> */}
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="JobList" component={Joblist} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
    )
}


export default StackNavigation;
