import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './Phonebook/Loader/Loader';

import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { AppHeaderBar } from './AppHeaderBar/AppBar';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <NavLink to="/" style={{ color: '#1976d2' }}>
        Your Website
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Layout = () => {
  return (
    <Box>
      <CssBaseline />
      <AppHeaderBar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Suspense fallback={<Loader>Loading...</Loader>}>
            <Outlet />
          </Suspense>
          <Copyright sx={{ mt: 5 }} />
        </Grid>
      </Grid>
    </Box>
  );
};
