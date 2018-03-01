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

import StackRoute from "./app/route/StackRouteDemo"
import TabRoute from "./app/route/TabRouteBottomDemo"
import TabRouteTop from "./app/route/TabRouteTopDemo"
import DrawerRoute from "./app/route/DrawerNavigatorDemo"

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (

            <DrawerRoute/>
            // <TabRouteTop/>
            // <TabRoute/>
            // <StackRoute/>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FC00',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
