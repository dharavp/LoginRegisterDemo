import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
    Splash,
    Login,
    VideoList,
    Register
} from 'screens';

const AppRouteConfig = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { gesturesEnabled: false } },
    Login: { screen: Login, navigationOptions: { gesturesEnabled: false } },
    VideoList: { screen: VideoList, navigationOptions: { gesturesEnabled: false } },
    Register: { screen: Register, navigationOptions: { gesturesEnabled: false } },
},
    {
        headerMode: 'none'
    })
export default AppRouteConfig;

