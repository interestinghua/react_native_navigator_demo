import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    TouchableHighlight,
    ScrollView,
    Image,
    Dimensions
} from 'react-native'

import PropTypes from 'prop-types'
import {BOOKAPI} from '../common/Constant'
import React from "react";
import {fetchRequest} from "../utils/FetchHttp";

const {height, width} = Dimensions.get('window');

export default class BookDetail extends React.Component {

    static propTypes = {
        type: PropTypes.number,
    };

    static defaultProps = {
        type: 2,
    };

    constructor(props) {

        super(props);
        this.state = {
            data: null,
            isbn10: '7121139510',
            imageUrl: null,
            author: null,
            authorIntro: null,
            catalog: null,
            summary: null
        };
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        // ToastAndroid.show(">>>" + this.props.type + "<<<", ToastAndroid.SHORT);
        console.log("componentDidMount")
        const {params} = this.props.navigation.state;
        // console.log("componentDidMount =====> " + JSON.stringify(params))
        this.setState({
            isbn10: params.bookDetail.isbn10,
            imageUrl: params.bookDetail.images["large"],
            author: JSON.stringify(params.bookDetail.author),
            authorIntro: params.bookDetail.author_intro,
            catalog: params.bookDetail.catalog,
            summary: params.bookDetail.summary
        })
        this._loadBookDetailByISBN();
    }

    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    render() {
        return (
            // contentContainerStyle={styles.styleScrollView}
            <ScrollView >

                {/*<View style={styles.container}>*/}

                    <View style={styles.styleImage}>
                        <Image source={{uri: this.state.imageUrl}}
                               style={{width: 100, height: 100}}/>
                    </View>

                    <View style={styles.styleScrollView}>
                        <Text style={styles.styleTextColor}>
                            {this.state.author}
                        </Text>
                    </View>

                    <View style={styles.styleScrollView}>
                        <Text style={styles.styleTextColor}>
                            {this.state.authorIntro}
                        </Text>
                    </View>

                    <View style={styles.styleScrollView}>
                        <Text style={styles.styleTextColor}>
                            {this.state.catalog}
                        </Text>
                    </View>

                    <View style={styles.styleScrollView}>
                        <Text style={styles.styleTextColor}>
                            {this.state.summary}
                        </Text>
                    </View>

                {/*</View>*/}

            </ScrollView>

        );
    }

    /**
     * 加载图书详情
     * @private
     */
    _loadBookDetailByISBN() {

        let searchParam = {
            name: this.state.isbn10,
        };

        fetchRequest(BOOKAPI.ISBN, 'GET', searchParam).then(
            response => {
                console.log('_loadBookDetailByISBN resolve: ' + JSON.stringify(response))


            }, error => {
                console.log('_loadBookDetailByISBN error: ' + error)
            })
    }

}

const styles = StyleSheet.create({

    styleScrollView: {
        width: width,
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    styleImage: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    styleAuthor: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 60,
        padding: 10
    },
    styleAuthorIntro: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        height: 130,
    },
    styleCatalog: {
        width: "100%",
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',
        padding: 10
    },
    styleSummary: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 10,
        height: 150,
    },
    styleTextColor: {
        color: '#000000',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});