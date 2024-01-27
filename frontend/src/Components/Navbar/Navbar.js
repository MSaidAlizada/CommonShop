import * as React from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {Link} from "react-router-dom";
import {AppBar, Box, Toolbar, Button, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar({ loggedIn }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='Navbar'>
      <BrowserView>
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography color="inherit" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', marginRight: "auto" }}>Common Shop</Typography>
              {loggedIn
                ?(<><Typography color="inherit" variant="h10">Balance: -100</Typography>
              <Button color="inherit" component={Link} to="/login" sx={{ alignItems: 'center' }}>Transfer money</Button>
              <Button color="inherit" component={Link} to="/dashboard" sx={{ alignItems: 'center' }}>Dashboard</Button></>):(<></>)}
              <Button color="inherit" component={Link} to="/login" sx={{ alignItems: 'center' }}>{loggedIn ? ("Logout") : ("Login")}</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </BrowserView>
      <MobileView>
        <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick ={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                  {
                    loggedIn ? (
                      <>
                        <MenuItem onClick={handleClose}>Transfer Money</MenuItem>
                        <MenuItem onClick={handleClose} component={Link} to="/dashboard">Dashboard</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </>
                    ) :
                    (
                      <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
                    )
                  }
              </Menu>
              <Typography color="inherit" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', marginRight: "auto" }}>Common Shop</Typography>
              {loggedIn ? (<Typography color="inherit" variant="h10" >Balance: -100</Typography>) : (<></>)} 
            </Toolbar>
          </AppBar>
        </Box>
      </MobileView>
    </div>
  );
}