import { FC, useState } from "react";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import LanguageIcon from '@mui/icons-material/Language';

export const LanguageMenu: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openLanguageSettings = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Tooltip title="Language Settings">
            <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={openLanguageSettings ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openLanguageSettings ? 'true' : undefined}
            >
                <LanguageIcon/>
            </IconButton>
        </Tooltip>
        <Menu
        anchorEl={anchorEl}
        id="language-menu"
        open={openLanguageSettings}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        <MenuItem onClick={handleClose}>
            <ListItemIcon>
                <Settings fontSize="small" />
            </ListItemIcon>
            Settings
        </MenuItem>
    </Menu>
    </>
    )
}