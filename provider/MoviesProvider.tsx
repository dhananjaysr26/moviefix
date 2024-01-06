import {createContext, useContext, useState} from 'react';
import React from 'react';
import {Genre} from '../src/types/movies';

interface GenreContextType {
  selectedGenre: Genre | null;
  setSelectedGenre: any;
}
const initialState: GenreContextType = {
  selectedGenre: {id: 0, name: 'All'},
  setSelectedGenre: null,
};

const GenreContext = createContext<GenreContextType>(initialState);

export const useGenreContext = (): GenreContextType => {
  const context = useContext(GenreContext);

  if (!context) {
    throw new Error('context not Available!');
  }

  return context;
};
export const GenreProvider = ({children}: {children: React.ReactNode}) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre>({
    id: 0,
    name: 'All',
  });

  return (
    <GenreContext.Provider value={{selectedGenre, setSelectedGenre}}>
      {children}
    </GenreContext.Provider>
  );
};
