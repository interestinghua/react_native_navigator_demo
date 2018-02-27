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
    View,
    NativeModules,
    Image,
    TouchableOpacity
} from 'react-native';
import Nav02 from "./Nav02";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// let nativeImageSource = require('nativeImageSource');

type Props = {};
export default class Nav01 extends Component<Props> {

    static navigationOptions = {
        title: 'Nav01',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {

        // let mipmapImg = {
        //     android: 'mipmap/ic_launcher',
        //     width: 120,
        //     height: 120
        // };

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Nav01!
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.onPress()
                }}>
                    <Text style={styles.jump}>点击我跳转到第二个页面</Text>
                </TouchableOpacity>

            </View>
        );
    }

    onPress() {
        const {navigate} = this.props.navigation; //the navigation prop is passed in to every screen
        navigate('Nav02', {
            param01: "我是 param01",
            param02: "我是 param02",
            param03: "我是 param03"
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    button: {
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 20,
        backgroundColor: '#FF0000'
    },
    jump: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        color: 'black'
    },
    icon: {
        width: 24,
        height: 24,
    },
});