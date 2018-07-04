import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import ImageListItem from './ImageListItem';
import ImageListItem2 from './ImageListItem2';

export default class HomeScreen extends Component {
    render() {

        return (
            <View style={{flexDirection:"column", flex: 1, backgroundColor: '#f7f7f7'}}>
                <ScrollView>
                     <ImageListItem />                    
                     <ImageListItem2 />         
                </ScrollView>
              </View>
        );
    }
}
