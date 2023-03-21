import Router from './router/Router';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  html, body, #root{
    height:100%;
    width:100%;
    position:relative;
  }
  
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
