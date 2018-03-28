/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StackNavigator
} from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import Nav02 from "../component/Nav02"
import Nav03 from "../component/Nav03"
import BookDetail from '../component/BookDetail'
import AjhRefreshFlatList from "../component/list/AjhRefreshFlatList";

const StackRoute = StackNavigator({
    // 将需要跳转的页面注册在这里，全局才可以跳转
    BookList: {
        screen: AjhRefreshFlatList,
        navigationOptions: {}
    },
    BookDetail: {
        screen: BookDetail,
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
    initialRouteName: "BookList",
    // transitionConfig: () => ({
    //     // 只要修改最后的forVertical就可以实现不同的动画了。
    //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    // }),
    navigationOptions: {
        header: null,
        // headerStyle: {
        //     backgroundColor: '#f4511e',
        // },
        // headerTintColor: '#333333',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
        // headerTitle: "App",
        // showIcon: true,
        // swipeEnabled: false,
        // animationEnabled: false,
    },
    mode: 'card'
});

export default StackRoute;