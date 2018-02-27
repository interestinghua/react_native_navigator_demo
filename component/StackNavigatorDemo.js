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
    StackNavigator
} from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Nav01 from "./Nav01"
import Nav02 from "./Nav02"
import Nav03 from "./Nav03"

const StackNav = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Nav01: {
        screen: Nav01,
        navigationOptions: {}
    },
    Nav02: {
        screen: Nav02,
        navigationOptions: {}
    },
    Nav03: {
        screen: Nav03,
        navigationOptions: {}
    }
}, {
    initialRouteName: "Nav01",
    transitionConfig: () => ({
        // 只要修改最后的forVertical就可以实现不同的动画了。
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    }),
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#333333',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerTitle: "App",
        showIcon: true,
        swipeEnabled: false,
        animationEnabled: false,
    },
    mode: 'card'
});

export default StackNav;