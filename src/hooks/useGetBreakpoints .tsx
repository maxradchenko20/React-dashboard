import { useMediaQuery, useTheme } from '@mui/material';

const useGetBreakpoints = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));

  return { isMobile, isTablet };
};

export default useGetBreakpoints;
