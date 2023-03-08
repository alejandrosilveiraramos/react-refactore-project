import React from "react"
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

export const SideMenu = () => {
    <React.Fragment>
        <Drawer>
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
    </React.Fragment>
}