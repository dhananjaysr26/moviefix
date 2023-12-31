import {createStore} from 'zustand';

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MoviesData {
  total_pages: number;
  results: Movie[];
  total_results: number;
  page: number;
}
interface Genre {
  id: number;
  name: string;
}

interface Store {
  moviesData: MoviesData | null;
  genres: null | Genre[];

  setMoviesData: (data: MoviesData) => void;
  setGenres: (data: any) => void;
}

export const useAppStore = createStore<Store>(set => ({
  // state
  moviesData: null,
  genres: null,

  // Functions
  setMoviesData: data => set({moviesData: data}),
  setGenres: data => set({genres: data}),
}));
