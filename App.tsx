import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs.navigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GenreProvider} from './provider/MoviesProvider.tsx';

export const queryClient = new QueryClient();

const App = () => {
  return (
    <GenreProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </QueryClientProvider>
    </GenreProvider>
  );
};

export default App;
