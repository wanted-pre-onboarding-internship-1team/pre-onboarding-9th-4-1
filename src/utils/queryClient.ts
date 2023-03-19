import { STALE_TIME, CACHE_TIME } from '../consts/time';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME,
      cacheTime: CACHE_TIME,
    },
  },
});
