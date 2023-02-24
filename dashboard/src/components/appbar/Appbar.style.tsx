import { styled } from '@mui/material/styles';

interface StyledSmallLogoProps {
    open?: boolean;
  }
export const StyledSmallLogo = styled('img')<StyledSmallLogoProps>(({ theme, open }) => ({
    width: '45px',
    minWidth: '45px',
    height: '45px',
    minHeight: '45px',
    bordeRadius: '8px',
    ...(open && { display: 'none' }),
}));

export const StyledContainer = styled('div')(({ theme }) => ({
    padding: '5px 10px',
    display: 'flex',
    width: '100%'
}));

export const StyledLeftContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    gap: '15px',
}));

export const StyledRightContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
}));