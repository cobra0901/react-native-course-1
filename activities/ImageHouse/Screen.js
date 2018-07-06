import React, {Component} from 'react';
import {
    StyleSheet, TouchableOpacity,
    Text,
    Image, Dimensions, ScrollView,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Carousel from './Carsoul';
import Carouse2 from './Carsoul2';
import SwitchButton from './Switch/SwitchButton';

const {height, width} = Dimensions.get('window');

export default class BackgroundImage extends Component {
    constructor() {
        super();

        this.state = {
            activeSwitch: 1
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <View style={{position: 'absolute', flex: 1, flexDirection: 'column'}}>
                    <Image source={require('../4.jpg')}
                           style={styles.backgroundImage}/>
                </View>

                <View style={styles.nav}/>

                <Image source={require('../game2.png')}
                       style={styles.logo}/>

                <Text style={styles.my}>我的電影</Text>

                <SwitchButton
                    onValueChange={(val) => this.setState({activeSwitch: val})}
                    text1='CN'
                    text2='EN'
                    switchWidth={75}
                    switchHeight={27}
                    switchdirection='rtl'
                    switchBorderRadius={100}
                    switchSpeedChange={500}
                    switchBorderColor='#d4d4d4'
                    switchBackgroundColor='#004ABB'
                    btnBorderColor='#fff'
                    btnBackgroundColor='#fff'
                    fontColor='#fff'
                    activeFontColor='#111'
                />

                {this.state.activeSwitch === 1 ? console.log('view1') : console.log('view2')}
                <ScrollView>

                    <View style={{backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>

                        <View style={{flexDirection:'row',justifyContent:'center'}}>
                            <Text style={styles.arrow}>Hong Kong</Text>
                            <Image source={require('../airplane.png')} style={styles.airplane}/>
                            <Text style={styles.arrow}>New York</Text>
                        </View>

                        <Text style={{color:'#111',fontSize:22,fontFamily:'notoserif',marginBottom:16,marginTop:5}}>Best Movie Notifications</Text>
                    </View>
                        <Carouse2/>

                    <View style={{backgroundColor:'#fff',justifyContent:'center',alignItems:'center',marginTop:10}}>
                        <Text style={{color:'#111',fontSize:22,fontFamily:'Roboto',marginTop:16}}>2018 Top Movies</Text>
                      <Carousel/>
                    </View>

                    <View style={styles.absolute}>
                        <View style={styles.imageline}>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="youtube" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="image" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>

                                <View style={styles.card}>
                                    <Icon name="search" size={30} color="black"/>
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.absolute}>
                        <View style={styles.imageline}>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="skype" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="tv" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>

                                <View style={styles.card}>
                                    <Icon name="globe" size={30} color="black"/>
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.absolute}>
                        <View style={styles.imageline}>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="database" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="camera" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>

                                <View style={styles.card}>
                                    <Icon name="book" size={30} color="black"/>
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.absolute}>
                        <View style={styles.imageline}>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="twitter" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>
                                <View style={styles.card}>
                                    <Icon name="archive" size={30} color="black"/>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>

                                <View style={styles.imageItem}/>

                                <View style={styles.card}>
                                    <Icon name="music" size={30} color="black"/>
                                </View>

                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text style={{color:'#000'}}>All Content Copyright @2018 All Rights</Text>
                    </View>

                    <Image source={require('../plane.jpg')} style={styles.plane}/>


                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },

    nav: {
        height: 70,
        width: width,
        backgroundColor: '#333',
        paddingTop: 24,
        paddingLeft: 10,
        opacity: 0.1
    },

    my:{
        top: 30,
        left: width/2.7,
        position: 'absolute',
        fontFamily:'course',
        fontSize:24,
        color:'#0ff0fA'
    },

    logo: {
        width: 80,
        height: 35,
        top: 30,
        left: 10,
        color:'#000',
        position: 'absolute'
    },

    absolute: {
        marginTop: 15,
        justifyContent: 'space-around'
    },

    arrow:{
        marginTop:15,
        fontSize:15,
        paddingHorizontal:5,
        color:'#111',
    },

    card: {
        position: 'absolute',
        top: width / 20,
        left: width / 17,
    },

    imageline: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },

    imageItem: {
        width: width / 5.3,
        height: width / 5.5,
        backgroundColor: 'grey',
        opacity: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },

    airplane:{
        width:50,
        height:30,
        marginTop:10
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },

    plane:{
        position:'absolute',
        right:4,
        bottom:5,
        width:40,
        height:40
    },

    footer: {
        backgroundColor: '#fff',
        marginTop:20,
        flex:1,
        flexDirection:'column',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
});