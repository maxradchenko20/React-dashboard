import Login from '@/pages/Login';
import Register from '@/pages/Register';
import { Box, Paper } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const AuthLayouts: FC = () => {
  const location = useLocation();

  return (
    <Paper elevation={12} className="w-[400px]">
      <Box padding={3}>
        {location.pathname === '/login' ? (
          <Login />
        ) : location.pathname === '/register' ? (
          <Register />
        ) : null}
      </Box>
    </Paper>
  );
};

export default AuthLayouts;
