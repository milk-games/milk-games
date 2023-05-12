import { extendTheme } from '@chakra-ui/react';
import colours from '@styles/Colours.json';
import components from '@styles/components';

import buttonShading from '@assets/shading.svg';
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
    bg: {
      dark: '#202020',
      light: '#FFF4DE',
      bg3: {
        dark: '#303030',
        light: '#E4DBB9',
      },
      bg2: {
        dark: '#404040',
        light: '#EEE5C4',
      },
      bg1: {
        dark: '#505050',
        light: '#F9F0D0',
      },
    },
    ...colours,
  },
  components: {
    ...components,
  },
  styles: {
    global: ({ colorMode }) => ({
      'html, body': {
        background: theme.colors.bg[colorMode],
        color: theme.colors.primary[colorMode],
      },
      '.header': {
        background: theme.colors.bg.bg1[colorMode],
      },
      '.header-wave': {
        background: theme.colors.bg[colorMode],
      },
      '.wave-1': {
        fill: theme.colors.bg.bg3[colorMode],
      },
      '.wave-2': {
        fill: theme.colors.bg.bg2[colorMode],
      },
      '.wave-3': {
        fill: theme.colors.bg.bg1[colorMode],
      },
      '.sidebar': {
        background: theme.colors.bg[colorMode],
      },
    }),
  },
});

export default theme;
