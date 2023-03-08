import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';


import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import logo from '../../../assets/img/logo.png'

import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';


export const Header = () => {

    return(
        
        <AppBar sx={{background: '#fff', padding: '1rem 3rem'}} >
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
            <img src={logo} alt="logo" />

            <Tabs >
                <Tab sx={{fontSize: '1.2rem'}} label='Home' component={Link} to='/home' />
                <Tab sx={{fontSize: '1.2rem'}} label='Sobre' component={Link} to='/about'  />
                <Tab sx={{fontSize: '1.2rem'}} label='Serviços'component={Link} to='/'  />
                <Tab sx={{fontSize: '1.2rem'}} label='Comprar' component={Link} to='/'  />
                <Tab sx={{fontSize: '1.2rem'}} label='Contato' component={Link} to='/'  />
            </Tabs>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px'}}>
                <ShoppingCartOutlinedIcon sx={{color: '#343434', fontSize: '2.5rem', paddingRight: '2rem'}} />
                <PrimaryButton/>
                <SecondaryButton />
            </div>
            
            </Toolbar>
        </AppBar>

    )
}