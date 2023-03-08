import React, { useState } from "react"
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

export const SideMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return(
        <React.Fragment>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                Login
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuIcon  sx={{color: '#343434', fontSize: '2.5rem'}}></MenuIcon>
            </IconButton>
        </React.Fragment>
        )
}