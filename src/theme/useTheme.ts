import { createTheme } from '@mui/material';

import { useThemeContext } from '@/context/ThemeContext';

export const useTheme = () => {
  const { themeMode } = useThemeContext();
  const theme = createTheme({
    palette: {
      mode: themeMode,
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
      primary: {
        main: '#03A9F4',
      },
      secondary: {
        main: '#FFC107',
      },
      text: {
        primary: '#212121',
      },
      error: {
        main: '#F44336',
      },
      warning: {
        main: '#FFC107',
      },
      success: {
        main: '#4CAF50',
      },
      info: {
        main: '#03A9F4',
      },
      grey: {
        '50': '#FAFAFA',
        '100': '#F5F5F5',
        '200': '#EEEEEE',
        '300': '#E0E0E0',
        '400': '#BDBDBD',
        '500': '#9E9E9E',
        '600': '#737B7D',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 768,
        lg: 1366,
        xl: 1920,
      },
    },
  });

  return {
    theme,
  };
};
