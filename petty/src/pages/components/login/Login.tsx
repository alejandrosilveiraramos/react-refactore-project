import React from 'react'

import { Paper, Container, CssBaseline, Grid, ListItem,  Typography, TextField, Link, Divider } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import logo from '../../../assets/img/logo.png'
import { PrimaryButton } from '../../../shared/components/buttons/PrimaryButton';
import { SecondaryButton } from '../../../shared/components/buttons/SecondaryButton';

export const Login = () => {


    return (
        <React.Fragment>
            
            <CssBaseline />
            <Container sx={{ display: 'flex', justifyContent: 'center', width: '100vw', paddingTop: '5rem'  }} maxWidth="xl">
                <Paper sx={{ height: 'auto', width: '50vh', padding: '1rem'}}>
                    <Grid container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1rem'}}>
                        <Grid container sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1rem'}}>
                            <Grid sx={{display: 'flex', alignItems: 'center'}} item xl={12}>
                                <img width={100} src={logo} alt="" />
                                <Typography sx={{fontSize: '1.55rem'}} fontWeight='bold' >Login</Typography>
                            </Grid>
                            <Grid item sx={{ width: '100%', margin: '.5rem 0'}} >
                            <TextField
                                id="outlined-password-input"
                                size='medium'
                                label="E-mail"
                                type="email"
                                autoComplete="current-email"
                                sx={{ width: '100%'}}
                                />
                            </Grid>
                            <Grid  item sx={{ width: '100%', margin: '.5rem 0'}}>
                            <TextField
                                id="outlined-password-input"
                                size='medium'
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                sx={{ width: '100%' }}
                                />
                                
                            </Grid>
                            <Grid item sx={{ width: '100%'}}>
                                <ListItem sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0', paddingRight: '0'}}>
                                    <Checkbox defaultChecked size="medium" />
                                    <Link sx={{fontSize: '1.2rem'}}>Esqueceu a senha ?</Link>
                                </ListItem>
                                <ListItem sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0', paddingRight: '0'}}>
                                    <PrimaryButton></PrimaryButton>
                                        
                                </ListItem>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ width: '100%', margin: '.5rem 0'}}>
                            <Divider />
                            <ListItem sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '0', paddingRight: '0'}}>
                            <Typography sx={{fontSize: '1.55rem', margin: '2rem 0'}} fontWeight='bold' >Não possui cadastro ainda ?</Typography>
                                <SecondaryButton></SecondaryButton>
                                    
                            </ListItem>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    )
}