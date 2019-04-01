import React  from 'react';
import { View, Image,TextInput,Text,TouchableOpacity } from 'react-native';
import * as titles from '../../constants/titles'; 
import styles from './style';
import { Button } from '../../components/atoms';
import * as utility from '../../utility';
import * as alerts from '../../constants/alerts'; 

export default class Login extends React.Component {
    constructor(props) {
        super(props);
     this.state = {email: '',
    password:''};
      }
      handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     handleLogin(){
         let email=this.state.email;
         let password=this.state.password;
         if(email===''){
             utility.showAlert(alerts.ALERT_EMPTY_EMAIL)
         }else if(password===''){
            utility.showAlert(alerts.ALERT_EMPTY_PASSWORD)
        }else if(email!=='admin@gmail.com' && email!=='Admin@gmail.com'){
            utility.showAlert(alerts.ALERT_VALID_EMAIL)
        }else if(password!=='123456'){
            utility.showAlert(alerts.ALERT_VALID_PASSWORD)
        }else{
            this.props.navigation.navigate('VideoList')
        }
     }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    width:'100%',
                    paddingLeft:25,
                    paddingRight:25,
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Image>

                </Image>
                <TextInput style = {styles.input}
                  placeholderTextColor="white"
               underlineColorAndroid = "transparent"
               textAlign={'center'}
               placeholder = {titles.PLACEHOLDER_EMAIL}
               onChangeText = {this.handleEmail}/>
                <View style={{width:'100%',
                height:2,
                backgroundColor:'#cf3852'}}>
                </View>
                <TextInput style = {styles.input}
                  placeholderTextColor="white"
                  textAlign={'center'}
               underlineColorAndroid = "transparent"
               placeholder = {titles.PLACEHOLDER_PASSWORD}
               secureTextEntry
               onChangeText = {this.handlePassword}/>

               <Button 
               moreContainerStyle={styles.buttonStyle}
               moreTextStyle={{
                   color:'#fff'
               }}
               title={titles.BUTTON_SIGN_IN}
               onPressListener={()=>{
                   this.handleLogin()
               }}/>
                </View>
              <View style={{
                  position:'absolute',
                  bottom:0,
                  height:40,
                  width:'100%',
                  justifyContent:'center',
                  alignItems:'center',
                  flexDirection:'row'
              }}>
              <View style={{
                  flex:1,
                  justifyContent:'center',
              }}> 
              <Text style={{
                  color:'#fff',
                  textAlign:'center',
              }}>
              {titles.TITLE_FORGOT_PASSWORD}
              </Text>
              </View>

              <View style={{
                  height:20,
                  width:0.5,
                  backgroundColor:'white'
              }}></View>
               <TouchableOpacity style={{
                  flex:1,
                  justifyContent:'center',
              }}
              onPress={()=>{
                  this.props.navigation.navigate('Register')
              }}> 
              <Text style={{
                  color:'#fff',
                  textAlign:'center',
                  textDecorationLine:'underline'
              }}>{titles.TITLE_CREATE_AN_ACCOUNT}</Text>
              </TouchableOpacity>
              </View>

            </View>
        );
    }
}
