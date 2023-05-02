import { extendTheme } from '@chakra-ui/react';
import colours from './resources/Colours.json';

import buttonShading from './resources/shading.svg';

import '@fontsource/quicksand';

const theme = extendTheme({
  fonts: {
    heading: 'Quicksand, sans-serif',
    body: `'Quicksand', sans-serif`,
  },
  colors: {
    primary: {
      light: '#000',
      dark: '#eee',
    },
    accent: {
      light: '#8FA78D',
      dark: '#8FA78D',
    },
    header: {
      dark: '#444',
      light: 'orange.100',
    },
    background: {
      dark: '#222',
      light: 'orange.50',
    },
    ...colours,
  },
  styles: {
    global: ({ colorMode }) => ({
      'html, body': {
        background: theme.colors.background[colorMode],
        color: theme.colors.primary[colorMode],
      },
      '.header': {
        background: theme.colors.header[colorMode],
      },
      '.header-wave': {
        fill: theme.colors.header[colorMode],
      },
      '.sidebar': {
        background: theme.colors.background[colorMode],
      },
    }),
  },
});

export default theme;
