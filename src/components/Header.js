import React from 'react';
import style from './styles/header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


const Header = () => {

    return (
        <AppBar position="static" className={style.header}>
            <Toolbar>
                <h1 style={{
                    width: '100%'
                }}>Recipe App</h1>
            </Toolbar>
        </AppBar>
    )
}


export default Header;