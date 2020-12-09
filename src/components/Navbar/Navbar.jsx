import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import useStyles from './styles';
import { ShoppingCart } from '@material-ui/icons';

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img  alt="" height="25px" className={classes.image} /> Commerce.js
          </Typography>
          <div className={classes.grow} />
        
            <IconButton  aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2}  color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
         
          
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
