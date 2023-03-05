import { Grid } from '@mui/material';
import { FC } from 'react';

import useGetBreakpoints from '@/hooks/useGetBreakpoints ';
import { LayoutType } from '@/utils/types';

const Wrapper: FC<LayoutType> = ({ children }) => {
  const { isTablet, isMobile } = useGetBreakpoints();

  const wrapperStyles = {
    flexDirection: isMobile ? 'column' : 'row',
  };
  //TODO add mobile styles
  return (
    <Grid
      container
      alignItems="center"
      flexWrap="nowrap"
      px={4}
      py={3}
      sx={{ borderBottom: '1px solid #3C3C3C' }}
      className="border-b-4 border-indigo-500"
    >
      {children}
    </Grid>
  );
};

export default Wrapper;
