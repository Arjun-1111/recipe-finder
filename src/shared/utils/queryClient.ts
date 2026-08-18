import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000, // 3 minutes
      gcTime: 20 * 60 * 1000, // 20 minutes
      retry: 1,
      refetchOnWindowFocus: true, // Only refetches if data is stale
    },
    mutations: {
      retry: 0, // Never retry mutations!
    },
  },
});

export default queryClient;
