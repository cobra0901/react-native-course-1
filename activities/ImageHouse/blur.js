import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Slider, AppRegistry } from 'react-native';
 
export default class Blur extends Component
{
    constructor()
    {
        super();
 
        this.state = { value: 0 }
    }
 
    render()
    {
        return(
            <View style = { styles.container }>
                <Image blurRadius = { this.state.value } source = {{ uri: 'https://tutorialscapital.com/wp-content/uploads/2017/09/background.jpg' }} style = { styles.blurImage }/>
                <View style = { styles.holder }>
                    <View style = { styles.transparentView }>
                        <Text style = { styles.text }>Blur Radius: { this.state.value }</Text>
                        <Slider style = {{ width: '100%' }} 
                            step = { 1 }
                            maximumValue = { 10 }
                            minimumValue = { 0 }
                            onValueChange={(value) => this.setState({ value: value })}
                            minimumTrackTintColor = "white" />
                    </View>
                </View>
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    container:
    {
        flex: 1
    },
 
    blurImage:
    {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        resizeMode: 'cover'
    },
 
    holder:
    {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
 
    transparentView:
    {
         alignSelf: 'stretch',
         padding: 10,
         backgroundColor: 'rgba(0,0,0,0.7)',
         alignItems: 'center'
    },
 
    text:
    {
        color: 'white',
        fontSize: 18
    }
});
 
