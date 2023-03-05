import { Button, Grid, Link, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import TextFieldController from '../../components/controllers/TextFieldController';
import { useLoginForm } from './useLoginForm';

const Login: FC = () => {
  const title = 'Log in';
  const navigate = useNavigate();

  const { form, handleSubmit } = useLoginForm();

  const navigateToRegisterPage = () => navigate('/register');

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item mb={4} width="inherit" textAlign="center">
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="email"
            placeholder="example@gmail.com"
            sx={{ width: 'inherit' }}
          />
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="password"
            placeholder="your password"
            sx={{ width: 'inherit' }}
            type="password"
          />
        </Grid>

        <Grid item width="inherit">
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>
        </Grid>

        <Grid mt={2} width="inherit" textAlign="center">
          <Typography fontWeight={400} fontSize={16}>
            U do not have an account?
            <Link
              component="button"
              underline="none"
              className="hover:text-red !pl-1 font-medium hover:cursor-pointer"
              onClick={navigateToRegisterPage}
            >
              Register
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
