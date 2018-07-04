import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';

export default class ImageListItem2 extends Component {
    render() {
        return (
            <View>
                <View style={styles.textBox3}>

                <View style={{ flexDirection: 'row', flex:1,justifyContent:'space-between' }}>

                    <Text style={{ fontSize: 15, color: '#666666',fontWeight: '700',marginTop:10 }}>
                    海外婚紗拍攝
                    </Text>                

                    <View style={{flexDirection:'row'}}>

                        <Text style={[{ fontSize: 13,marginRight:16, color: '#111111',fontWeight: '400',marginTop:10 }]}>
                        2018/05/19
                        </Text>

                        <TouchableOpacity 
                            onPress={() => {
                            navigation.navigate({
                            routeName: 'my/coupon'
                            })
                        }}>
                            <View style={styles.rightButton}>
                            <Text style={{fontSize:15,color:'#fff',fontWeight: '500'}}>送出</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                

                </View>

                </View>
                
                <View style={{width: '100%', backgroundColor: '#F7F7F7',flexDirection:'row'}}>
                
                    <View>
                        <Image source={require('../lion.jpg')} style={{width:145,height:126,marginRight:5,marginBottom:4}}/>
                        <Image source={require('../dog.jpg')} style={{width:145,height:126,marginRight:5}}/>
                    </View>

                    <Image source={require('../baby.png')} style={{width:255,height:255}}/>

                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
   
    textBox3: {
      flexDirection:'column',
      height: 61,
      paddingHorizontal: 20,
      paddingTop:10,
      justifyContent: 'center',
      backgroundColor:'#F7F7F7'
    },
    text: {
      fontSize: 20,
      color: '#000',
      marginTop: -6,
    },
    rightButton:{
        width:60,
        height:36,
        borderRadius:18,
        paddingVertical:7,
        marginTop: 3,
        paddingHorizontal: 13,
        backgroundColor:'#71D8CF',
        borderColor:'#71D8CF',
        borderWidth:1,
      },
  })