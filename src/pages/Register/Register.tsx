import { Button, Grid, Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import TextFieldController from '@/components/controllers/TextFieldController';

import { useRegisterForm } from './useRegisterForm';

const Register = () => {
  const title = 'Register';
  const navigate = useNavigate();

  const { form, handleSubmit } = useRegisterForm();

  const navigateToLoginPage = () => navigate('/login');

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item mb={4} width="inherit" textAlign="center">
          <Typography variant="h3">{title}</Typography>
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="firstName"
            placeholder="Name"
            sx={{ width: 'inherit' }}
            required
          />
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="username"
            placeholder="Username"
            sx={{ width: 'inherit' }}
            required
          />
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="email"
            placeholder="example@gmail.com"
            sx={{ width: 'inherit' }}
            required
          />
        </Grid>
        <Grid item width="inherit">
          <TextFieldController
            control={form.control}
            name="password"
            placeholder="your password"
            sx={{ width: 'inherit' }}
            type="password"
            required
          />
        </Grid>
        <Grid item width="inherit">
          <Button variant="contained" type="submit" fullWidth>
            Register
          </Button>
        </Grid>
        <Grid mt={2} width="inherit" textAlign="center">
          <Typography fontWeight={400} fontSize={16}>
            U already have an account?
            <Link
              component="button"
              underline="none"
              className="hover:text-red !pl-1 font-medium hover:cursor-pointer"
              onClick={navigateToLoginPage}
            >
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};

export default Register;
