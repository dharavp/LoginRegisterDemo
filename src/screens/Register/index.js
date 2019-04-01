import React  from 'react';
import { View, Image,TextInput,Text,TouchableOpacity,Alert } from 'react-native';
import * as titles from '../../constants/titles'; 
import styles from './style';
import { Button } from '../../components/atoms';
import * as utility from '../../utility';
import * as alerts from '../../constants/alerts';
import * as icons from '../../assets/icons';
import * as color from '../../constants/colors';
import ImagePicker from 'react-native-image-picker';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
     this.state = {name: '',
    password:'',path:'',
    email:''};
      }
      handleEmail = (text) => {
        this.setState({ email: text })
     }
     handlePassword = (text) => {
        this.setState({ password: text })
     }
     handleName = (text) => {
        this.setState({ name: text })
     }
     handleRegister(){
         let email=this.state.email;
         let password=this.state.password;
         let name=this.state.name;
          if(name===''){
            utility.showAlert(alerts.ALERT_EMPTY_NAME)
        }else if(email===''){
             utility.showAlert(alerts.ALERT_EMPTY_EMAIL)
         }else if(password===''){
            utility.showAlert(alerts.ALERT_EMPTY_PASSWORD)
        } else if(path===''){
            utility.showAlert('Please select Image')
        }else{
            this.props.navigation.navigate('VideoList')
        }
     }
     onCancelPress(){
         this.props.navigation.goBack();
     }
    
     onImagePickCLick(){
        const options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          
        
          ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
            } else if (response.error) {
            } else if (response.customButton) {
            } else {
              this.setState({
                path: response.uri,
              });
            }
          });
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
                <TouchableOpacity 
                style={{
                    width:75,
                    height:75
                }}
                onPress={this.onImagePickCLick.bind(this)}>
                <Image
                style={{
                    width:75,
                    height:75,
                    marginBottom:10
                }}
                source={this.state.path===''?icons.IC_USER:
                {uri:this.state.path}}>

                </Image>
                </TouchableOpacity>
               
                <TextInput style = {styles.input}
                  placeholderTextColor="white"
               underlineColorAndroid = "transparent"
               textAlign={'center'}
               placeholder = {titles.PLACEHOLDER_FULL_NAME}
               onChangeText = {this.handleName}/>
                <View style={{width:'100%',
                height:2,
                backgroundColor:'#cf3852'}}/>
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
               title={titles.BUTTON_REGISTER}
               onPressListener={()=>{
                   this.handleRegister()
               }}/>
               
                </View>
                <TouchableOpacity style={{
                 position:'absolute',
                 bottom:0,
                 width:'100%',
                 height:40,
                 width:'100%',
                 justifyContent:'center',
                 alignItems:'center',
                 backgroundColor:color.BUTTON_COLOR
             }}
             onPress={this.onCancelPress.bind(this)}>
                 <Text style={{
                     color:'#fff'
                 }}>
                     {titles.BUTTON_CANCEL}
                 </Text>
             </TouchableOpacity>
            </View>
        );
    }
}
