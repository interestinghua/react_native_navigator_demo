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

const RouterNavigator = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    Nav01: {
        screen: Nav01,
        navigationOptions: {
            header: null
        }
    },
    Nav02: {
        screen: Nav02,
        navigationOptions: {
            header: null
        }
    },
    Nav03: {
        screen: Nav03,
        navigationOptions: {
            header: null
        }
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
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default RouterNavigator;