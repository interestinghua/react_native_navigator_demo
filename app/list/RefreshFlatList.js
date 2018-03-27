import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    TouchableHighlight
} from 'react-native'

import PropTypes from 'prop-types'
import RefreshList from 'react-native-refreshlist'
import {BOOKAPI} from '../common/Constant'
import {fetchRequest} from '../utils/FetchHttp'

// const preData = [{keysss: 1}, {keysss: 2}, {keysss: 3}, {keysss: 4}, {keysss: 5}, {keysss: 6}, {keysss: 7}, {keysss: 8}, {keysss: 9}, {keysss: 10}];
// const newData = [{keysss: 12}, {keysss: 23}, {keysss: 34}, {keysss: 45}, {keysss: 56}, {keysss: 67}, {keysss: 78}, {keysss: 89}, {keysss: 90}, {keysss: 10}];

export default class RefreshAndLoadMoreFlatList extends React.Component {

    static propTypes = {
        type: PropTypes.number
    };

    static defaultProps = {
        type: 2
    };

    constructor(props) {

        super(props);
        this.moreTime = 0;

        this.state = {
            data: null,
            start: 0,
            count: 20,
            tag: '科幻'
        };

        // if (this.props.type === 1) {
        //     setTimeout(() => {
        //         this._listRef.setError();
        //
        //     }, 1000);
        // } else if (this.props.type === 2) {
        //     setTimeout(() => {
        //         this._listRef.setData([]);
        //
        //     }, 1000);
        // } else {
        //     setTimeout(() => {
        //         this._listRef.setData(preData);
        //
        //     }, 1000);
        // }
    }


    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve) {
        console.log("_onPullRelease");
        setTimeout(() => {
            resolve();
            this.moreTime = 0;
            this._listRef.setData(this.state.responseText);
        }, 500);
    }

    /**
     * 点击事件
     * @param item
     * @private
     */
    _onItemPress(item) {

    }

    /**
     * 加载更多  数据加载
     * @private
     */
    _loadMore() {
        console.log("_loadMore");

        if (this.props.type === 4) {
            if (!this.resume) {
                setTimeout(() => {
                    this._listRef.setError();
                    this.resume = true;
                }, 500);
            } else {
                setTimeout(() => {
                    if (this.moreTime < 3) {
                        this._listRef.addData(this.state.data);
                        this.moreTime++;
                    } else {
                        this._listRef.addData([]);
                    }

                }, 500);
            }

        } else {
            setTimeout(() => {
                if (this.moreTime < 3) {
                    this._listRef.addData(this.state.data);
                    this.moreTime++;
                } else {
                    this._listRef.addData([]);
                }

            }, 500);
        }

    }

    /**
     * 渲染item 布局
     * @param item
     * @returns {XML}
     * @private
     */
    _renderItem(item) {
        // JSON.stringify(response["books"])
        console.log("_renderItem" + JSON.stringify(item));
        return (
            <TouchableHighlight
                underlayColor="rgba(34, 26, 38, 0.1)"
                onPress={() => {
                    this._onItemPress(item)
                }}>
                <View style={styles.listWrapper}>
                    <View
                        style={styles.listItemWrapper}><Text>{item.item.isbn10}</Text></View>
                    <View
                        style={styles.listItemWrapper}><Text>{item.item.isbn13}</Text></View>
                    <View style={styles.listItemWrapper}><Text
                        style={styles.listItemTextBlue}>{item.item.pubdate}</Text></View>
                    <View style={styles.listItemWrapper}><Text
                        style={styles.listItemTextRed}>{item.item.binding}</Text></View>
                </View>
            </TouchableHighlight>
        )
    }


    _back() {
        const navigator = this.props.navigator;
        // && navigator.getCurrentRoutes().length > 1
        if (navigator) {
            // navigator.pop();
            navigator.goBack()
            return true;
        }
        return false;
    }

    componentWillMount() {
        console.log("componentWillMount")

    }

    componentDidMount() {

        // ToastAndroid.show(">>>" + this.props.type + "<<<", ToastAndroid.SHORT);
        console.log("componentDidMount")

        let searchParam = {
            tag: this.state.tag,
            start: this.state.start,
            count: this.state.count
        };

        fetchRequest(BOOKAPI.SEARCH, 'GET', searchParam).then(
            response => {

                this.setState({
                    'data': response["books"],
                    'start': this.state.start++
                });

                this._listRef.setData(response["books"]);

                console.log('books: ' + this.state.data)
                console.log('start: ' + this.state.start)

            }, error => {
                console.log('error: ' + error)
            })
    }


    componentWillUpdate() {
        console.log("componentWillUpdate")

    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={() => {
                        this._back()
                    }}
                    style={{padding: 20}}>回退</Text>
                <RefreshList
                    ref={(list) => this._listRef = list}
                    onPullRelease={(resolve) => this._onPullRelease(resolve)}
                    ItemHeight={100}
                    onEndReached={() => this._loadMore()}
                    renderItem={(item) => this._renderItem(item)}/>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listWrapper: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 100,
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',
    },
    listItemWrapper: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    listItemTextBlue: {
        color: '#45a162',
    },
    listItemTextRed: {
        color: '#c84a4a',
    }
});