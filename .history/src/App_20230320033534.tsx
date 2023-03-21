import Router from './router/Router';
import { mainTheme } from './styles/theme';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  
  
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
