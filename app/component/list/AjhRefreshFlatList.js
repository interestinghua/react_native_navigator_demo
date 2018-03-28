import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    TouchableHighlight,
    Image
} from 'react-native'

import PropTypes from 'prop-types'
import RefreshList from 'react-native-refreshlist'
import {BOOKAPI} from '../../common/Constant'
import {fetchRequest} from '../../utils/FetchHttp'
import StackRoute from "../../route/StackRouteDemo"

const itemHeight = 120;

export default class AjhRefreshFlatList extends React.Component {

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
            count: 5,
            tag: '计算机'
        };
    }

    componentWillMount() {
        console.log("componentWillMount");

    }

    componentDidMount() {
        // ToastAndroid.show(">>>" + this.props.type + "<<<", ToastAndroid.SHORT);
        console.log("componentDidMount")
        this._refresh();
    }

    componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Text*/}
                {/*onPress={() => {*/}
                {/*this._back()*/}
                {/*}}*/}
                {/*style={{padding: 20}}>回退</Text>*/}
                <RefreshList
                    ref={(list) => this._listRef = list}
                    onPullRelease={(resolve) => this._onPullRelease(resolve)}
                    ItemHeight={itemHeight}
                    onEndReached={() => this._loadMore()}
                    renderItem={(item) => this._renderItem(item)}/>
            </View>
        );

    }

    /**
     * 下拉刷新
     * @private
     */
    _onPullRelease(resolve) {
        console.log("_onPullRelease");
        this._refresh();
    }

    /**
     * 点击事件
     * @param item
     * @private
     */
    _onItemPress(item) {

        console.log("我点击了 ====> " + item.item.isbn10);

        const {navigate} = this.props.navigation;

        navigate('BookDetail', {
            bookDetail: item.item,
        });

    }

    /**
     * 加载更多  数据加载
     * @private
     */
    _loadMore() {

        console.log("_loadMore");

        let searchParam = {
            tag: this.state.tag,
            start: this.moreTime,
            count: this.state.count
        };

        fetchRequest(BOOKAPI.SEARCH, 'GET', searchParam).then(
            response => {

                if (this.moreTime > 0) {
                    this._listRef.addData(response["books"]);
                } else {
                    this._listRef.setData(response["books"]);
                }

                this.moreTime++;
                this._listRef.resolveHandler();

            }, error => {
                this._listRef.resolveHandler();
                this._listRef.setError();
                console.log('_loadMore error: ' + error)
            })

    }

    /**
     * 下拉刷新
     * @private
     */
    _refresh() {

        this.moreTime = 0;

        let searchParam = {
            tag: this.state.tag,
            start: 0,
            count: this.state.count
        };

        fetchRequest(BOOKAPI.SEARCH, 'GET', searchParam).then(
            response => {

                this._listRef.setData(response["books"]);
                this._listRef.resolveHandler();

            }, error => {
                this._listRef.resolveHandler();
                this._listRef.setError();
                console.log('_refresh error: ' + error)
            })
    }

    /**
     * 渲染item 布局
     * @param item
     * @returns {XML}
     * @private
     */
    _renderItem(item) {

        item.index.toString();

        return (

            <TouchableHighlight
                underlayColor="rgba(34, 26, 38, 0.1)"
                onPress={() => {
                    this._onItemPress(item)
                }}>
                <View style={styles.listItem}>
                    <View style={styles.listLeft}>
                        <Image source={{uri: item.item.images["medium"]}}
                               style={{width: 80, height: 80}}/>
                    </View>
                    <View style={styles.listRight}>
                        <View
                            style={styles.listRightItem}><Text
                            style={styles.listItemTextRed}>{"价格： " + item.item.price}</Text></View>
                        <View
                            style={styles.listRightItem}><Text
                            style={styles.listItemTextRed}>{"ISBN10： " + item.item.isbn10}</Text></View>
                        <View style={styles.listRightItem}><Text
                            style={styles.listItemTextBlue}>{"出版社： " + item.item.publisher}</Text></View>
                        <View style={styles.listRightItem}><Text
                            style={styles.listItemTextRed}>{"第一作者： " + item.item.author[0]}</Text></View>
                        <View style={styles.listRightItem}><Text
                            style={styles.listItemTextRed}>{"出版时间： " + item.item.pubdate}</Text></View>
                    </View>

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


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listItem: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: itemHeight,
        borderTopWidth: 1,
        borderTopColor: '#EBEBEB',
        padding: 30

    },
    listLeft: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listRight: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 20,
    },

    listRightItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    listItemTextBlue: {
        color: '#000000',
    },

    listItemTextRed: {
        color: '#000000',
    }
});