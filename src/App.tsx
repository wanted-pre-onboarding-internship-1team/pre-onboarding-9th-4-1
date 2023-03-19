import Router from './router/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root{
    height:100%;
    width:100%;
    position:relative;
  }
  
  *{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  
`;

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
