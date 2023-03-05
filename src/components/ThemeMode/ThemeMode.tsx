import React, { FC, useState } from 'react';

import { ThemeProvider } from '@/context/ThemeContext';
import { ThemeTypeEnum } from '@/utils/types';

type Props = {
  children: React.ReactNode;
};
const ThemeMode: FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useState(ThemeTypeEnum.LIGHT);

  const toggleThemeMode = () => {
    setThemeMode((prev) =>
      prev === ThemeTypeEnum.LIGHT ? ThemeTypeEnum.DARK : ThemeTypeEnum.LIGHT,
    );
  };

  const themeProviderValue = {
    themeMode,
    toggleThemeMode,
  };

  return <ThemeProvider value={themeProviderValue}>{children}</ThemeProvider>;
};

export default ThemeMode;
