import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import Home from '../../pages/home';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles>
        <Home />
      </GlobalStyles>
    </ThemeProvider>
  );
}
