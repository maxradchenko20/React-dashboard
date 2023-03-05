import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge, Divider, Grid, IconButton } from '@mui/material';

import TextFieldController from '@/components/controllers/TextFieldController';
import { useFormTopBar } from '@/components/TopBar/components/ActionBlock/useFormTopBar';
import { useThemeContext } from '@/context/ThemeContext';
import useGetBreakpoints from '@/hooks/useGetBreakpoints ';
import { ThemeTypeEnum } from '@/utils/types';

const ActionBlock = () => {
  const { themeMode, toggleThemeMode } = useThemeContext();
  const { isTablet, isMobile } = useGetBreakpoints();

  const isDarkMode = themeMode == ThemeTypeEnum.DARK;
  const toggleThemeIconColor = isDarkMode ? 'white' : 'black';

  const handleChangeTheme = () => toggleThemeMode();

  const { form } = useFormTopBar();

  return (
    <Grid
      container
      xs
      alignItems="center"
      justifyContent="end"
      columnGap={isTablet || isMobile ? 2 : 4}
    >
      <Grid item>
        <IconButton onClick={handleChangeTheme}>
          <DarkModeIcon style={{ color: toggleThemeIconColor }} />
        </IconButton>
      </Grid>
      <Grid item>
        <Badge color="info" variant="dot">
          <NotificationsIcon color="disabled" />
        </Badge>
      </Grid>
      <Grid item mx={2} height={50}>
        <Divider orientation="vertical" className="w-[1px] text-gray-600" />
      </Grid>
      <Grid item>
        <TextFieldController
          control={form.control}
          name="search"
          sx={{
            width: isTablet ? 300 : 400,
            input: {
              color: isDarkMode ? 'white' : 'black',
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ActionBlock;
