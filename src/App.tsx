import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import AuthLayouts from '@/layouts/AuthLayouts';
import ComponentLayout from '@/layouts/ComponentLayout';
import Home from '@/pages/Home';
import PrivateRoute from '@/routes/PrivateRoute';
import { useTheme } from '@/theme/useTheme';

import Auth from './components/Auth';
import { queryClient } from './config/queryClient';

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Auth>
          <ComponentLayout>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              margin="auto"
              height="100vh"
            >
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route path="login" element={<AuthLayouts />} />
                <Route path="register" element={<AuthLayouts />} />
              </Routes>
            </Box>
          </ComponentLayout>
        </Auth>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
