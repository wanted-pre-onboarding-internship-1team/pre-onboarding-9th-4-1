/**
 *
 * TODO : cache, stale time (5초) 로 변경하기
 * TODO : Suspense, Error Fallback 추가하기
 */
import Router from './router/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root{
    height:100%;
    width:100%;
    position:relative;
    background-color: #efefef;
  }
  
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
