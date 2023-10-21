import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Button sx={{ color: '#fff' }}>
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn ? (
        <>
          <Button sx={{ color: '#fff' }}>
            <NavLink to="/contacts">Contacts</NavLink>
          </Button>
          <UserMenu />
        </>
      ) : (
        <>
          <Button sx={{ color: '#fff' }}>
            <NavLink to="/register">Register</NavLink>
          </Button>
          <Button sx={{ color: '#fff' }}>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </>
      )}
    </Box>
  );
};
