import React from 'react';
import {TouchableOpacity, Text, View  } from 'react-native';
import {TabNavigator,createStackNavigator} from 'react-navigation';
import HomeScreen from './activities/ImageHouse/HomeScreen';
import ListingScreen from './activities/ImageHouse/ListingScreen';
import NavTabBar from './activities/ImageHouse/NavTabBar';
import PlusScreen from './activities/ImageHouse/plus';
import Download from './activities/ImageHouse/download';
import Outlet from './activities/ImageHouse/outlet';
import Blur from './activities/ImageHouse/blur';

export default class App extends React.Component {

    render(){

        return(

            <View style={{flexDirection:"column", flex:1}}>
                <View style={{flex:1}}>
                    {/* <ArticleNavigator/> */}
                    {/* <PlusScreen/>         */}
                    {/* <Download />      */}
                    {/* <Outlet />                     */}
                    <Blur />                    

                </View>
            {/* <TouchableOpacity 
                style={{position:'absolute',bottom:20,right:20,width:50,height:50,borderRadius:5000,backgroundColor:'#FF7284'}}>
                <Text style={{color:'#fff',paddingLeft:13,fontSize:40,marginTop:-3}}>+</Text>
            </TouchableOpacity> */}

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

// const RootStack = createStackNavigator(
//     {
//         Article: ArticleNavigator,
//         PLUS: PlusScreen,
//     },
//     {
//       initialRouteName: 'Article',
//     }
//   );