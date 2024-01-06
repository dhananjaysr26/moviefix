import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import {THEMOVIEDB_API_BASE_URL, THEMOVIEDB_API_KEY} from '@env';
import {Genre} from '../types/movies';
import {useEffect} from 'react';
import {queryClient} from '../../App';

export const useGetMovies = (genre: Genre | null = null) => {
  const queryKey = ['fetchMovies', genre?.id];
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    status,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery({
    queryKey,
    queryFn: async ({pageParam}: any) => {
      // console.log(
      //   `${'https://api.themoviedb.org/3'}/discover/movie?api_key=${'2dca580c2a14b55200e784d157207b4d'}&sort_by=popularity.desc&primary_release_year=${pageParam}&page=1&vote_count.gte=100&${
      //     genreIds ? 'with_genres=' + genreIds : ''
      //   }`,
      // );

      return fetch(
        `${'https://api.themoviedb.org/3'}/discover/movie?api_key=${'2dca580c2a14b55200e784d157207b4d'}&sort_by=popularity.desc&primary_release_year=${pageParam}&page=1&vote_count.gte=100&${
          genre !== null && genre.id !== 0 ? 'with_genres=' + genre.id : ''
        }`,
      ).then(async response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const resData = await response.json();
        return {
          movies: resData,
          year: pageParam,
        };
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      // console.log({lastPage, allPages});
      if (allPages.length === 0) {
        return undefined;
      }
      const nextPageParam = 2012 + allPages.length;

      return nextPageParam;
    },
    getPreviousPageParam: (lastPage, allPages) => {
      // console.log({lastPage, allPages});
      if (allPages.length === 0) {
        return undefined;
      }
      const nextPageParam = 2012 - allPages.length;

      return nextPageParam;
    },
    initialPageParam: 2012,
  });
  // console.log('==>>>>>>>>', {genre, queryKey});

  useEffect(() => {
    queryClient.invalidateQueries({queryKey});
  }, [genre]);

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    hasPreviousPage,
    fetchPreviousPage,
    isFetchingPreviousPage,
    queryKey,
  };
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
