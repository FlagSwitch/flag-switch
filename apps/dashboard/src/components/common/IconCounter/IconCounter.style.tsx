import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row'
    },
    icon: {
        color: theme.palette.grey[500],
        fontSize: theme.typography.overline.fontSize,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.typography.overline.fontSize
    },
}));