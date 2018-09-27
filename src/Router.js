import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, Text, Button, Icon, View, Header } from 'react-native';
import { StackNavigator, createBottomTabNavigator, createSwitchNavigator  } from 'react-navigation';


import Login from "./Screens/Login";
import Home from "./Screens/Home";
import Billing from "./Screens/Billing";
import Calendar from "./Screens/Calendar";
import Profile from "./Screens/Profile";
import AuthLoading from "./Screens/AuthenticationLoading";
import DeliveryLookup from "./Screens/DeliveryLookup";
import ReadyToPickup from "./Screens/ReadyToPickup";
import ConfirmPickup from "./Screens/ConfirmPickup";
import PickupComplete from "./Screens/PickupComplete";
import PickupCompleteFeedback from "./Screens/PickupCompleteFeedback";


import KeyboardManager from 'react-native-keyboard-manager'

KeyboardManager.setEnable(true);

export const HomeNav = StackNavigator({

    HomeScreen: { 
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Order listing</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 

        
    },

    DeliveryLookupScreen: { 
        screen: DeliveryLookup,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>#1234567</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
 
    },

    ReadyToPickupScreen: { 
        screen: ReadyToPickup,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>#1234567</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
 
    },

    ConfirmPickupScreen: { 
        screen: ConfirmPickup,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>#1234567</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
 
    },

    PickupCompleteScreen: { 
        screen: PickupComplete,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>#1234567</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
 
    },

    PickupCompleteFeedbackScreen: { 
        screen: PickupCompleteFeedback,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>#1234567</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
 
    },

})

export const BillingNav = StackNavigator({

    BilllingScreen: { 
        screen: Billing,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Hello Vendors!</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
    },

})

export const CalendarNav = StackNavigator({

    CalendarScreen: { 
        screen: Calendar,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Hello Vendors!</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
    },

})

export const ProfileNav = StackNavigator({

    ProfileScreen: { 
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Hello Vendors!</Text> ,
            // headerTitleStyle: {textAlign: 'center', flex: 1},
            headerStyle: { backgroundColor: '#EC6A41'},
            headerTintColor: 'white'
        }), 
    },

})

export const StartNav = StackNavigator({
    LoginScreen: Login
}, {
    headerMode: 'none',
})


export const MainTabBar = createBottomTabNavigator(
    {
        Home: HomeNav,
        Billing: BillingNav,
        Calendar: CalendarNav,
        Profile: ProfileNav,
    },

    {
        navigationOptions: ({ navigation }) => ({

        tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        return (

            routeName == 'Home' ? (
                <Image source={require('./Assets/Images/tab_home_icon.png')} style={{width: 25, height: 25, resizeMode: 'contain', tintColor}} />
            ):
            routeName == 'Billing'? (
                <Image source={require('./Assets/Images/tab_billing_icon.png')} style={{width: 25, height: 25, resizeMode: 'contain', tintColor}} />
            ):
            routeName == 'Calendar'? (
                <Image source={require('./Assets/Images/tab_calendar_icon.png')} style={{width: 25, height: 25, resizeMode: 'contain', tintColor}} />
            ):(
                <Image source={require('./Assets/Images/tab_profile_icon.png')} style={{width: 25, height: 25, resizeMode: 'contain', tintColor}} />
            )
        )
        
      }

    }),

    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#CACBCB',
      style: {backgroundColor: '#EC6A41'}
    },

  });


export const AppSwitch = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Start: StartNav,
        Main: MainTabBar
    },
    {
        initialRouteName: 'AuthLoading'
    }
);