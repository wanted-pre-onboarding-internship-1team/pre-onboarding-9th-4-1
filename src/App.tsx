import Router from './router/Router';
import { mainTheme } from './styles/theme';
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
    background: ${({ theme }) => theme.color.backgroundSemiDark};
  }
  
`;
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
