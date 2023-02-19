import { Box } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { queryClient } from './config/queryClient';
import AuthLayouts from './layouts/AuthLayouts';
import Home from './pages/Home';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
