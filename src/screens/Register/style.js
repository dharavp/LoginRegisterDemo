import { StyleSheet } from 'react-native';
import * as color from '../../constants/colors';

export default styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
        backgroundColor: color.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        height:50,
        width:'100%',
        color:'#fff'
    },
    buttonStyle:{
        width:'100%',
        marginTop:20,
        backgroundColor:color.BUTTON_COLOR
    }
});
