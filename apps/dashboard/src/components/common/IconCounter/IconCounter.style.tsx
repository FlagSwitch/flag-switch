// import { makeStyles } from 'tss-react/mui';
import { styled } from '@mui/material/styles';


export const StyledContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
}));

export const StyledIcon = styled('div')(({ theme }) => ({
    color: theme.palette.grey[500],
    fontSize: theme.typography.overline.fontSize,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledCounter = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.typography.overline.fontSize
}));