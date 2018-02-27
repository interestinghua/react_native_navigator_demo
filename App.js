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

import StackRoute from "./component/StackRouteDemo"
import TabRoute from "./component/TabRouteBottomDemo"
import TabRouteTop from "./component/TabRouteTopDemo"
import DrawerRoute from "./component/DrawerNavigatorDemo"

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (

            <TabRouteTop/>
            // <DrawerRoute/>
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
