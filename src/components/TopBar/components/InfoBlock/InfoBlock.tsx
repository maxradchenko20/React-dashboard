import { Grid, Typography } from '@mui/material';
import { format } from 'date-fns';

import { useAuthContext } from '@/context/AuthContext';
import { useThemeContext } from '@/context/ThemeContext';
import useGetClock from '@/hooks/useGetClock';
import { DATA_FULL_FORMAT } from '@/utils/constans';
import { ThemeTypeEnum } from '@/utils/types';

const InfoBlock = () => {
  const { timer } = useGetClock();
  const { themeMode } = useThemeContext();
  const { user } = useAuthContext();

  const isDarkMode = themeMode == ThemeTypeEnum.DARK;
  const actualDataAndTime = `${format(
    new Date(),
    DATA_FULL_FORMAT,
  )} | ${timer.toLocaleTimeString()}`;
  const textStyles = {
    color: isDarkMode ? 'white' : 'black',
  };

  return (
    <Grid container flexDirection="column" xl={8} lg={3} md={4}>
      <Typography fontWeight={700} fontSize={20} {...textStyles}>
        Welcome, {user?.user.firstName}
      </Typography>
      <Typography fontWeight={500} fontSize={14} {...textStyles}>
        {actualDataAndTime}
      </Typography>
    </Grid>
  );
};

export default InfoBlock;
