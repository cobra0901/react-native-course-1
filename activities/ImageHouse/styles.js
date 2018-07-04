import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin:0
    },
    active: {
        color: '#fff',
        width:'50%',
        fontWeight: 'bold',
        backgroundColor:'#FF7284',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        padding:15,
        fontSize: 15
    },

    nonactive: {
        color: '#111',
        width:'50%',
        height: 50,
        fontSize: 15,        
        padding:15,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
