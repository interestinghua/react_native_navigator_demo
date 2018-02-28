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

import StackRoute from "./component/route/StackRouteDemo"
import TabRoute from "./component/route/TabRouteBottomDemo"
import TabRouteTop from "./component/route/TabRouteTopDemo"
import DrawerRoute from "./component/route/DrawerNavigatorDemo"

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
