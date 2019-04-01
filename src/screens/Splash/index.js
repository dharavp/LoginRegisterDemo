import React from 'react';
import { View } from 'react-native';
import styles from './style';


export default class Splash extends React.Component {

    componentWillMount() {

        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2500);
    }
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}
