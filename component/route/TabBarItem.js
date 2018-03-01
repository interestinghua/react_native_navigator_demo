import React, {Component} from 'react';
import {Image} from "react-native";

export default class TabBarItem extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        tintColor: '#ffffff',
        focused: false,
        normalImage: NaN,
        selectedImage: NaN,
    };

    // static propTypes = {
    //     tintColor: React.PropTypes.string,
    //     focused: React.PropTypes.bool,
    //     normalImage: React.PropTypes.number,
    //     selectedImage: React.PropTypes.number,
    // };

    render() {
        console.debug("-----------------------------------------------");
        console.debug(this.props);
        console.debug("===============================================");
        return (


            <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
                    style={{width: 27, height: 27}}
            />
        );
    }
}