import {useQuery} from '@tanstack/react-query';
import {THEMOVIEDB_API_BASE_URL, THEMOVIEDB_API_KEY} from '@env';
import {useState} from 'react';

export const useGetMovies = () => {
  const [year, setYear] = useState(2012);
  const {isError, error, isLoading, data} = useQuery({
    queryKey: [`movies-${year}`],
    queryFn: () =>
      fetch(
        `${THEMOVIEDB_API_BASE_URL}/discover/movie?api_key=${THEMOVIEDB_API_KEY}&sort_by=popularity.desc&primary_release_year=${year}&page=1&vote_count.gte=100`,
      ).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
  });

  return {isError, error, isLoading, data, setYear, year};
};

export const useGetMoviesGenres = (language = 'en') => {
  const {isError, error, isLoading, data} = useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      fetch(
        `${THEMOVIEDB_API_BASE_URL}/genre/movie/list?language=${language}'&api_key=${THEMOVIEDB_API_KEY}`,
      ).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }),
  });

  return {isError, error, isLoading, data};
};
