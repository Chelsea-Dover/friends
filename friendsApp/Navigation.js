import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Contacts from './Contacts';

const Navigation = createStackNavigator({
  Home: { screen: Home },
  Contacts: { screen: Contacts},
});

const AppContainer = createAppContainer(Navigation);

export default AppContainer;
