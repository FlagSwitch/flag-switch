
import { styled } from '@mui/material/styles';
import {
    Divider,
} from '@mui/material';


export const StyledDivider = styled(Divider)(({ theme }) => ({
    height: '100%',
    borderColor: theme.palette.dividerAlternative,
    width: '1px',
    display: 'inline-block',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    padding: '10px 0',
    verticalAlign: 'middle',
}));

export const StyledHeaderContainer = styled(Divider)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const StyledTopContainer = styled(Divider)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
}));

export const StyledHeader = styled(Divider)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: theme.spacing(2),
}));

export const StyledHeaderTitle = styled(Divider)(({ theme }) => ({
    fontSize: theme.fontSizes.mainHeader,
    fontWeight: 'normal',
}));

export const StyledHeaderActions = styled(Divider)(({ theme }) => ({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: theme.spacing(1),
}));