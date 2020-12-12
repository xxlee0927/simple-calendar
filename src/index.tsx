import './index.css';
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);
