/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    TabNavigator, StackNavigator, TabBarTop
} from 'react-navigation';

import Nav01 from "../component/Nav01"
import Nav02 from "../component/Nav02"
import Nav03 from "../component/Nav03"

const TabRouteConfigs = {
    Nav01: {
        screen: Nav01,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: 'Nav01',
        }),
    },
    Nav02: {
        screen: Nav02,
        navigationOptions: {
            tabBarLabel: 'Nav02',
        },
    }
    ,
    Nav03: {
        screen: Nav03,
        navigationOptions: {
            tabBarLabel: 'Nav03',
        },
    }
};

const TabNavigatorConfigs = {
    initialRouteName: 'Nav01',
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {}
};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};

const StackNavigatorConfigs = {
    initialRouteName: 'Tab',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};

const TabRouteTop = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

export default TabRouteTop