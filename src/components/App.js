import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default () => <RootStack />
