import React, {Component} from 'react';
import {View, TouchableOpacity,Text,StyleSheet} from 'react-native';


export default class ImageHouse extends Component {

    render() {
        return (

            <View style={{flex:1,marginTop:15,marginBottom:2}}>

                <View style={styles.textBox1}>
                    <Text style={{ fontSize: 11, color: '#666666',marginBottom:2 ,fontWeight: '400'}}>
                      相簿名稱
                    </Text>
                    <TouchableOpacity onPress={this.changePassword}>
                    <Text style={{ fontSize: 13, color: '#71D8CF',marginTop:2,fontWeight: '400' }}>
                      輸入相簿名稱
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:1, backgroundColor:'#DDDDDD', marginVertical: 1,}}></View>

                <View style={styles.textBox2}>

                    <Text style={{ fontSize: 11, color: '#666666',marginBottom:2 ,fontWeight: '400'}}>
                    相簿公開
                    </Text>

                    <View style={{ marginLeft: 1, marginTop: 8, flexDirection: 'row' }}>

                        <TouchableOpacity>
                            <Text style={styles.genderText} >
                            公開

                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={styles.genderText2} >
                            不公開

                            </Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={{height:1, backgroundColor:'#DDDDDD', marginVertical: 1,}}></View>

              </View>

        );
    }
}

const styles = StyleSheet.create({
textBox2: {
    height: 75,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },textBox1: {
    height: 60,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },genderText: {
    paddingLeft: 20,
    paddingRight: 20,
    fontSize:13,
    color:'#71D8CF',
    borderColor: '#71D8CF',
    marginRight:10,
    borderRadius:16,
    width:70,
    height:30,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 0,
    paddingTop: 6,
    fontWeight: '500'
  },genderText2: {
    paddingLeft: 15,
    paddingRight: 15,
    color:'#fff',
    fontSize:13,
    borderColor: '#71D8CF',
    marginRight:10,
    borderRadius:16,
    backgroundColor:'#71D8CF',
    width:70,
    height:30,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 0,
    paddingTop: 6,
    fontWeight: '500'
  }
});