import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import { AppBar } from '../appbar/AppBar';
import { Sidebar } from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom';
import Card from '@mui/material/Card'
import { useTheme } from '@mui/system';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function MiniDrawer() {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', height: '100%', backgroundColor: theme.palette.contentWrapper }}>
      <CssBaseline />
      <AppBar />
      <Sidebar/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, gap: '5px' }}>
        <DrawerHeader />
        <div style={{ paddingLeft: '5px'}}>
          <Breadcrumbs />
        </div>
        <div style={{ paddingTop: '5px'}}>
          <Outlet/>
        </div>
      </Box>
    </Box>
  );
}