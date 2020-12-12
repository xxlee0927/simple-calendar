import './i18n';
import '@/api';

import React from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import theme from '@/theme';
import App from './App';

const muiTheme = createMuiTheme(theme);

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
