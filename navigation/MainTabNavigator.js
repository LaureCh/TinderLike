import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TopPicksScreen from '../screens/TopPicksScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: { headerMode: 'none'},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-flame' : 'md-flame'} />
    ),
};

HomeStack.path = '';

//Top Picks Stack
const TopPicksStack = createStackNavigator(
  {
    TopPicks: TopPicksScreen,
  },
  config
);

TopPicksStack.navigationOptions = {
  tabBarLabel: 'Picks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-star' : 'md-star'} />
  ),
};

TopPicksStack.path = '';

//Profile tab
const ProfileStack = createStackNavigator(
    {
        Links: ProfileScreen,
    },
    config
);

ProfileStack.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
    ),
};
ProfileStack.path = '';

//Message tab
const MessageStack = createStackNavigator(
    {
        Links: MessagesScreen,
    },
    config
);

MessageStack.navigationOptions = {
    tabBarLabel: 'Messages',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'} />
    ),
};
MessageStack.path = '';

//global navigation
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TopPicksStack,
  ProfileStack,
  MessageStack
});

tabNavigator.path = '';

export default tabNavigator;
