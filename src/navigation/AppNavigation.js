import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import MainScreen from "../screens/MainScreen";
import {InfoScreen} from "../screens/InfoScreen";
import {HistoryScreen} from "../screens/HistoryScreen";
import {Ionicons} from '@expo/vector-icons'
import React from "react";

const MainNavigator = createStackNavigator({
    Main: {
        screen:MainScreen
    }
})
const HistoryNavigator = createStackNavigator({
    History: {
        screen:HistoryScreen
    },
    Info:{
        screen:InfoScreen
    }
})
const BottomNavigator = createBottomTabNavigator({
    'Главная':{
        screen:MainNavigator,
        navigationOptions:{
            tabBarIcon: <Ionicons name="ios-compass" size={25} color='#7a7a7a'/>
        }
    },
    'История': {
        screen:HistoryNavigator,
        navigationOptions:{
            tabBarIcon: <Ionicons name="ios-albums" size={25} color='#7a7a7a'/>
        }
    }

})
export const AppNavigation= createAppContainer(BottomNavigator)