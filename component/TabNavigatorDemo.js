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
    TabNavigator,TabBarBottom
} from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';

import Nav01 from "./Nav01"
import Nav02 from "./Nav02"
import Nav03 from "./Nav03"

export default TabNavigator({
        // 将需要跳转的页面注册在这里，全局才可以跳转
        Nav01: {
            screen: Nav01
        },
        Nav02: {
            screen: Nav02
        },
        Nav03: {
            screen: Nav03
        }
    }, {
        // navigationOptions: ({navigation}) => ({
        //     tabBarIcon: ({focused, tintColor}) => {
        //         const {routeName} = navigation.state;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        //         } else if (routeName === 'Settings') {
        //             iconName = `ios-options${focused ? '' : '-outline'}`;
        //         }
        //
        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Ionicons name={iconName} size={25} color={tintColor}/>;
        //     },
        // }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    }
);

// export default TabNav;