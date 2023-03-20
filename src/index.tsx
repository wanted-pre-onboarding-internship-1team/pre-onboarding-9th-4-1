import App from './App';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const quertOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5,
      cacheTime: 1000 * 60,
      refetchOnMount: false,
      refetchInterval: 1000 * 5,
    },
  },
};

const queryClient = new QueryClient(quertOptions);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
