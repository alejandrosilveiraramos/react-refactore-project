
import React, { useState } from "react";

import { AppBar, Toolbar, useMediaQuery, useTheme, Drawer, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../../assets/img/logo.png';

import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';
import { SideMenu } from "../side-menu/SideMenu";


export const Header = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMobile);

    const [openDrawer, setOpenDrawer] = useState(false)


    return (
        <React.Fragment>
            <AppBar sx={{ background: '#fff', padding: '1rem 3rem' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={logo} alt="logo" />

                    {isMobile ? (
                        <React.Fragment>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <ShoppingCartOutlinedIcon sx={{ color: '#343434', fontSize: '4rem', paddingRight: '2rem' }} />
                                <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                                    <SideMenu/>
                                </Drawer>
                                <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                                    <MenuIcon  sx={{color: '#343434', fontSize: '2.5rem'}}></MenuIcon>
                                </IconButton>
                            </div>
                        </React.Fragment>

                    ) : (
                        <React.Fragment>
                            <SideMenu></SideMenu>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <ShoppingCartOutlinedIcon sx={{ color: '#343434', fontSize: '5rem', paddingRight: '2rem' }} />
                                <PrimaryButton />
                                <SecondaryButton />
                            </div>

                        </React.Fragment>
                    )}

                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
};


