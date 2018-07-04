
import { StyleSheet, Platform } from 'react-native';

  export default StyleSheet.create({
    
    Container :{
    
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',
       
     }
    
   });