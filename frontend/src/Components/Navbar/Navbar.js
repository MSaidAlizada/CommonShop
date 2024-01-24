import * as React from 'react';
import {Link} from "react-router-dom";
import {AppBar, Box, Toolbar, Button, Typography} from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
           <Typography color="inherit" variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', marginRight: "auto" }}>Common Shop</Typography>
          <Button color="inherit" component={Link} to="/login" sx={{ alignItems: 'center' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}