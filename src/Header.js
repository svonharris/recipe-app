import React from 'react';
import style from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Header = () => {

    return (
        <AppBar position="static" className={style.header}>
            <Toolbar>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                    Recipe App <br></br>
                    <i>Build a food recipe application.</i>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header;