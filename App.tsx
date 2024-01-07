import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs.navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GenreProvider} from './provider/MoviesProvider.tsx';
import SplashScreen from './src/screens/Splash.screen.tsx';

export const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <GenreProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {loading ? <SplashScreen /> : <BottomTabs />}
        </NavigationContainer>
      </QueryClientProvider>
    </GenreProvider>
  );
};

export default App;
