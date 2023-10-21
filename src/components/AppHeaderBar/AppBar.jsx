import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navigation } from 'components/Navigation/Navigation';

export const AppHeaderBar = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          PhoneBook
        </Typography>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
};
