import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import ImageListItemPengYou from './ImageListItemPengYou';
import ImageListItemPengYou2 from './ImageListItemPengYou2';

export default class ImageListItem2 extends Component {
    render() {

        return (
            <View style={{flexDirection:"column", flex: 1, backgroundColor: '#f7f7f7'}}>
                <ScrollView>
                     <ImageListItemPengYou />                    
                     <ImageListItemPengYou2 />         
                </ScrollView>
              </View>
        );
    }
}
