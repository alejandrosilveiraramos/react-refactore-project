import React, { useState } from "react"
import { Link } from 'react-router-dom';''

import { Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';

interface MenuItemProps {
  text: string;
  path: string;
}

export const SideMenu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabs: MenuItemProps[] = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Sobre',
      path: '/about'
    },
    {
      text: 'Serviços',
      path: '/services'
    },
    {
      text: 'Comprar',
      path: '/buy'
    },
    {
      text: 'Contato',
      path: '/contact'
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (

    <React.Fragment>
        {isMobile ? (
            <Tabs orientation="vertical" value={selectedTab} onChange={handleTabChange}>
                {tabs.map((tab, index) => (
                    <Tab  key={index} label={tab.text} component={Link} to={tab.path} />
                ))}
            </Tabs>
        ) : (
            <Tabs value={selectedTab} onChange={handleTabChange}>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.text} component={Link} to={tab.path} />
                ))}
            </Tabs>
        )}
    </React.Fragment>

  );
}
