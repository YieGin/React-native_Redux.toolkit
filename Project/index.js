import {AppRegistry} from 'react-native';
import App from './components/navigation/App';
import {Provider} from 'react-redux';
import store from './components/redux/store';
import {name as appName} from './app.json';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
