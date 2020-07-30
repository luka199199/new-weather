
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js';


const navigator = createStackNavigator({
  Search: SearchScreen
},{
  initialRouteName: 'Search',
  defaultNavigationOptions:{
    title:'City Manager'
  }
});
export default createAppContainer(navigator);