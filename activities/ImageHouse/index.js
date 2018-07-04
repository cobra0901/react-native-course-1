import React, {Component} from 'react';
import {View, TouchableOpacity,Text} from 'react-native';
import {TabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import ListingScreen from './ListingScreen';
import NavTabBar from './NavTabBar';

export default class ImageHouse extends Component {

    render() {
        return (

            <View>
                <Text>How are you?</Text>
            </View>
        );
    }
}

export const ArticleNavigator = TabNavigator(
    {
        ArticleTab: {screen: HomeScreen},
        ListingTab: {screen: ListingScreen},
    },
    {
        initialRouteName: 'ArticleTab',
        tabBarComponent: NavTabBar,
        tabBarPosition: 'top'
    }
);