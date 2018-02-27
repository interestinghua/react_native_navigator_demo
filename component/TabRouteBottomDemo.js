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
    TabNavigator, TabBarBottom
} from 'react-navigation';

import Nav01 from "./Nav01"
import Nav02 from "./Nav02"
import Nav03 from "./Nav03"
import TabBarItem from "./TabBarItem"

const TabRoute = TabNavigator({
        // 将需要跳转的页面注册在这里，全局才可以跳转
        Nav01: {
            screen: Nav01,
            navigationOptions: {
                tabBarLabel: 'Nav01',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/ability_01_icon.png')}
                        selectedImage={require('../img/ability_01_icon.png')}
                    />
                ),
            },
        },
        Nav02: {
            screen: Nav02,
            navigationOptions: {
                tabBarLabel: 'Nav02',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/ability_02_icon.png')}
                        selectedImage={require('../img/ability_02_icon.png')}
                    />
                ),
            },
        },
        Nav03: {
            screen: Nav03,
            navigationOptions: {
                tabBarLabel: 'Nav03',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../img/ability_03_icon.png')}
                        selectedImage={require('../img/ability_03_icon.png')}
                    />
                ),
            },
        }
    }, {
        initialRouteName: 'Nav01',
        tabBarComponent: TabBarBottom,  // TabBarBottom
        tabBarPosition: 'bottom',       // 显示位置，android 默认是显示在页面顶端的
        swipeEnabled: true,             // 是否可以左右滑动切换tab
        animationEnabled: true,         // 切换页面时是否有动画效果
        lazy: true,                     // 懒加载
        backBehavior: 'none',           // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            // activeTintColor: '#06C1AE', //  激活版块的颜色
            // inactiveTintColor: '#979797', // 非激活版块的颜色
            style: {backgroundColor: '#ffffff'},// 背景颜色
            labelStyle: {fontSize: 12}          // 文字大小
        },
    }
);

export default TabRoute