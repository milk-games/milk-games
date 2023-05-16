import { ColorModeScript } from '@chakra-ui/react';
import App from 'App';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>
);
