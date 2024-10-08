import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import feedbackLogo from '../assets/images/feedbackLogo.png';
import { Stack } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useNavbar } from '../components/context/NavbarContext';
const Navbar = () => {
  const { showButtons } = useNavbar();
  const location = useLocation();
  const hideDashboardBtn = location.pathname === '/dashboard';
  return (
    <AppBar
      position='fixed'
      color=''
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
        // backgroundColor: 'white'
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img
            src={feedbackLogo}
            alt='Feedback logo'
            style={{ marginRight: 8, height: 40 }}
          />
          <Typography variant='h6' component='div'>
            USER FEEDBACK
          </Typography>
        </Box>
        <Stack spacing={3} direction='row'>
          <Link to={'/'}>Home</Link>
          {!showButtons && !hideDashboardBtn ? (
            <>
              <Link to='/contact'>Contact</Link>
              <Link to='/services'>Services</Link>{' '}
              <Link to='/dashboard'>Dashboard</Link>
            </>
          ) : null}
          {showButtons && (
            <>
              <Button variant='contained' color='primary'>
                SAVE
              </Button>
              <Button variant='contained' color='success'>
                PUBLISH
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
