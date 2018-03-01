
import React, {Component} from 'react';
import {DrawerNavigator, StackNavigator, TabBarBottom, TabNavigator} from "react-navigation";
import Nav01 from "../component/Nav01";
import Nav02 from "../component/Nav02";
import Nav03 from "../component/Nav03";
import TabBarItem from "./TabBarItem";

const DrawerRouteConfigs = {
    Nav01: {
        screen: Nav01,
        navigationOptions: ({navigation}) => ({
            drawerLabel: '首页',
            drawerIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/ability_01_icon.png')}
                    selectedImage={require('../../img/ability_01_icon.png')}
                />
            ),
        }),
    },
    Nav02: {
        screen: Nav02,
        navigationOptions: {
            drawerLabel: '附近',
            drawerIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/ability_02_icon.png')}
                    selectedImage={require('../../img/ability_02_icon.png')}
                />
            ),
        },
    },
    Nav03: {
        screen: Nav03,
        navigationOptions: {
            drawerLabel: '我的',
            drawerIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../../img/ability_03_icon.png')}
                    selectedImage={require('../../img/ability_03_icon.png')}
                />
            ),
        },
    }
};

const DrawerNavigatorConfigs = {
    initialRouteName: 'Nav01',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    tabBarOptions: {}
};

const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);

const StackRouteConfigs = {
    Drawer: {
        screen: Drawer,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'Drawer',
    navigationOptions: {
        title: '标题',
        headerStyle: {backgroundColor: '#5da8ff'},
        headerTitleStyle: {color: '#333333'},
    }
};
const DrawerRoute = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

export default DrawerRoute