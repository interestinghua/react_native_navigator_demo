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
    TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Nav02 extends Component<Props> {

    componentWillMount() {
        //一次初始化只调用一次
        const {navigate} = this.props.navigation;
    }

    render() {

        const {params} = this.props.navigation.state;
        let param01 = params ? params.param01 : null;
        let param02 = params ? params.param02 : null;
        let param03 = params ? params.param03 : null;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Nav02!
                </Text>
                <Text style={styles.welcome}>
                    {JSON.stringify(param01)}
                </Text>
                <Text style={styles.welcome}>
                    {param02}
                </Text>
                <Text style={styles.welcome}>
                    {param03}
                </Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.onPress()
                }}>
                    <Text style={styles.jump}>返回第一个页面</Text>
                </TouchableOpacity>
            </View>
        );
    }

    onPress() {
        const {navigate} = this.props.navigation;
        // navigate.goBack()
        navigate('Nav01');
    }

    componentDidMount() {
        //一次初始化只调用一次
        const {navigate} = this.props.navigation;
    }

    shouldComponentUpdate() {

    }

    componentWillReceiveProps() {

    }

    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        //一次初始化只调用一次

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
    }
});
