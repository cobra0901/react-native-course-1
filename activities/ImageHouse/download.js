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
 
      <FlatList
      
         data={ this.state.GridViewItems }
 
         renderItem={({item}) =><View style={styles.GridViewBlockStyle}>
 
            <Image 
              style={{width: 130, height: 130}}
               source={{uri: item.key }}
             />

             <TouchableOpacity 
                style = {{position:'absolute',top:10,right:10}}
                onPress={() => this.changeGender('M')}>
                <Text style={[styles.genderText, isMale && styles.genderActiveBackground]} >
                  1
                </Text>
              </TouchableOpacity>

            </View>}
 
         numColumns={3}
 
        />
   
   
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
 
