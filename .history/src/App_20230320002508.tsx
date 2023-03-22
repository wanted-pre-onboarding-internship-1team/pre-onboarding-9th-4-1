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
  
`;
function App() {
  <GlobalStyle />;
  return <div>1</div>;
}

export default App;