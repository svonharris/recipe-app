import React from 'react';
import style from './styles/header.module.scss';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const Header = () => {

    return (
        <AppBar position="static" className={style.header}>
            <Toolbar className={style.nav}>
                <h1 className={style.title}>Recipe App</h1>
            </Toolbar>
        </AppBar>
    )
}


export default Header;