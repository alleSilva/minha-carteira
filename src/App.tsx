import React from 'react';
import Dashboard from './pages/Dashboard';
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = ()=> {
  
  const toggle = false;

  return (
	<>
    <GlobalStyles/>
    <ThemeProvider theme={toggle ? dark : light}>
      <Dashboard/>
    </ThemeProvider>
  </>
  );
}

export default App;
