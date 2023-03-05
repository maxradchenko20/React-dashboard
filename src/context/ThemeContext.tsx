import { createContext, useContext } from 'react';

import { noop } from '@/utils/constans';
import { ThemeTypeEnum } from '@/utils/types';

export type ThemeContext = {
  themeMode: ThemeTypeEnum;
  toggleThemeMode: () => void;
};

const themeContext = createContext<ThemeContext>({
  themeMode: ThemeTypeEnum.LIGHT,
  toggleThemeMode: noop,
});

export const useThemeContext = () => useContext(themeContext);
export const ThemeProvider = themeContext.Provider;

export default themeContext;
