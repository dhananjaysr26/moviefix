import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs.navigator';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default App;
