import React, { Component } from 'react';
 
import {StyleSheet, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
 
export default class Download extends Component {
 
 constructor(props)
 {
   super(props);
   this.changeGender = this.changeGender.bind(this)
   this.state = { GridViewItems: [

     {key: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-6.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg'},
     {key: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg'},

   ]}
   
   
 }
 
 changeGender (gender) {
    if (gender === 'M') {
      this.setState({
        memSex: 1
      })
    } else {
      this.setState({
        memSex: 0
      })
    }
  }

 render() {
    const isMale = (this.state.memSex === 1)

   return (
 
<View style={styles.MainContainer}>

      <View style={styles.textBox1}>

            <Text style={{ fontSize: 11, color: '#666666',marginBottom:2 ,fontWeight: '400'}}>
                2018/05/19
            </Text>

        </View>

      <FlatList
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
 
            <Image 
               style={{width: 220,height:130}}
               source={{uri: item.key }}
               />

            </View>}
 
         numColumns={2}
 
        />

        <TouchableOpacity 
            style={{position:'absolute',bottom:20,right:20,width:50,height:50,borderRadius:5000,backgroundColor:'#FF7284'}}>
            <Text style={{color:'#fff',paddingLeft:13,fontSize:40,marginTop:-3}}>+</Text>
        </TouchableOpacity>

   
   
</View>
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
    justifyContent: 'center',
    flex:1, 
},
 
GridViewBlockStyle: {
 
  justifyContent: 'center',
  flex:1,
  alignItems: 'center',
  height: 130,
  margin:2,
  backgroundColor: '#fff'
 
}
,
textBox1: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
 
GridViewInsideTextItemStyle: {
 
   color: '#fff',
   padding: 1,
   fontSize: 18,
   justifyContent: 'center',
   
 },

 genderText: {
    paddingLeft: 8,
    paddingTop:2,
    color:'#fff',
    borderColor: '#71D8CF',
    backgroundColor:'#71D8CF',
    fontSize:15,
    borderRadius:26,
    width:25,
    height:25,
    borderWidth: 2,
    borderStyle: 'solid',
    fontWeight: '400'
  },

  genderActiveBackground: {
    backgroundColor: 'transparent',
    color:'#FFFFFF'
  },
 
});
 
