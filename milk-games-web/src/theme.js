import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Quicksand', sans-serif`,
  },
  colors: {
    primary: {
      light: '#000',
      dark: '#eee',
    },
    header: {
      dark: '#444',
      light: 'orange.100',
    },
    background: {
      dark: '#222',
      light: '#ccc',
    },
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
        fill: theme.colors.background[colorMode],
      },
      '.sidebar': {
        background: theme.colors.background[colorMode],
      },
    }),
  },
});

export default theme;
