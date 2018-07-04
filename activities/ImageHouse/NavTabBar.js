import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class NavTabBar extends Component {

    render() {
        const {navigate, state} = this.props.navigation;
        const {index, routes} = state;
        const active = routes[index].key;
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={() => navigate('ArticleTab')} >
                    <Text
                        style={active === 'ArticleTab' ? styles.active : styles.nonactive}
                    >
                        我的相簿
                    </Text>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => navigate('ListingTab')}>
                    <Text
                        style={active === 'ListingTab' ? styles.active : styles.nonactive}
                    >
                        相簿我的
                    </Text>
                </TouchableWithoutFeedback>
                
            </View>
        );
    }
}

NavTabBar.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default NavTabBar;
