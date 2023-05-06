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
      dark: '#505050',
      light: '#F9F0D0',
      wave1: {
        dark: '#303030',
        light: '#E4DBB9',
      },
      wave2: {
        dark: '#404040',
        light: '#EEE5C4',
      },
    },
    background: {
      dark: '#202020',
      light: '#FFF4DE',
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
        background: theme.colors.background[colorMode],
      },
      '.wave-1': {
        fill: theme.colors.header.wave1[colorMode],
      },
      '.wave-2': {
        fill: theme.colors.header.wave2[colorMode],
      },
      '.wave-3': {
        fill: theme.colors.header[colorMode],
      },
      '.sidebar': {
        background: theme.colors.background[colorMode],
      },
    }),
  },
});

export default theme;
