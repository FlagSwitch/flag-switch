import { FC, useContext, useState} from 'react'
import { SidePanelContext } from '../../context/SidePanelContext';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledContainer, StyledLeftContainer, StyledRightContainer, StyledSmallLogo } from './Appbar.style'
import smallImageSrc from '../../assets/jpeg/flagSwitchSmall.jpeg';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { DarkModeContext } from '../../context/DarkModeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
export const AppBar:FC = () => {
    const { open, setOpenSideNavbar } = useContext(SidePanelContext);
    const { theme: darkTheme, toggleThemeMode } = useContext(DarkModeContext);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openAccountSettings = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDrawerOpen = () => {
        setOpenSideNavbar(true);
    };
    return (
        <StyledAppBar position="fixed" open={open}>
        <Toolbar disableGutters>
        <StyledContainer>
                <StyledLeftContainer>
                    <StyledSmallLogo open={open} src={smallImageSrc}/>
                    <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                            ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                    </IconButton>
                </StyledLeftContainer>
                <StyledRightContainer>
                    <DarkModeSwitch
                            checked={darkTheme === 'dark'}
                            onChange={toggleThemeMode}
                            sunColor="#0098e5"
                            moonColor='#59d0ff'
                            size={20}
                    />
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={openAccountSettings ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openAccountSettings ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openAccountSettings}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                        },
                        '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                        },
                    },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                    </MenuItem>
                </Menu>
                </StyledRightContainer>
            </StyledContainer>
        </Toolbar>
      </StyledAppBar>
    )
}