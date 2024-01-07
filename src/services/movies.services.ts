import {THEMOVIEDB_API_BASE_URL, THEMOVIEDB_API_KEY} from '@env';
import {OTTProviderIds} from '../utils/config';

export const getOttProviders = async (movieId: number) => {
  const url = `${THEMOVIEDB_API_BASE_URL}/watch/providers/movie?api_key=${THEMOVIEDB_API_KEY}&language=en-US&watch_region=US&movie_id=${movieId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const providers = data.results.filter((provider: any) =>
      OTTProviderIds.includes(provider.provider_id),
    );
    return providers;
  } catch (error: any) {
    console.error('Error:', error);
    return {error: error.message};
  }
};
