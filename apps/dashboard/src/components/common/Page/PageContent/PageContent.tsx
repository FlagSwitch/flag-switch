import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { PageHeader } from '../PageHeader/PageHeader';
import { Paper, PaperProps, styled } from '@mui/material';
import { useStyles } from './PageContent.style';
import { ConditionallyRender } from '../../ConditionallyRender/ConditionallyRender';

interface IPageContentProps extends PaperProps {
    header?: ReactNode;
    isLoading?: boolean;
    disablePadding?: boolean;
    disableBorder?: boolean;
    disableLoading?: boolean;
    bodyClass?: string;
    headerClass?: string;
}

const StyledHeader = styled('div')(({ theme }) => ({
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: theme.palette.divider,
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3, 2),
    },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    borderRadius: theme.shape.borderRadiusLarge,
    boxShadow: 'none',
    height: '100%'
}));

const PageContentLoading: FC<{ isLoading: boolean; children: ReactNode }> = ({
    children,
    isLoading,
}) => {
    //const ref = useLoading(isLoading);

    return (
        <div  aria-busy={isLoading} aria-live="polite" style={{height: '100%'}}>
            {children}
        </div>
    );
};

export const PageContent: FC<IPageContentProps> = ({
    children,
    header,
    disablePadding = false,
    disableBorder = false,
    bodyClass = '',
    headerClass = '',
    isLoading = false,
    disableLoading = false,
    className,
    ...rest
}) => {
    const { classes: styles } = useStyles();

    const headerClasses = classnames(
        'header',
        headerClass || styles.headerPadding,
        {
            [styles.paddingDisabled]: disablePadding,
            [styles.borderDisabled]: disableBorder,
        }
    );

    const bodyClasses = classnames(
        'body',
        bodyClass ? bodyClass : styles.bodyContainer,
        {
            [styles.paddingDisabled]: disablePadding,
            [styles.borderDisabled]: disableBorder,
        }
    );

    const paperProps = disableBorder ? { elevation: 0 } : {};

    const content = (
        <StyledPaper
            {...rest}
            {...paperProps}
            className={classnames(className)}
        >
            <ConditionallyRender
                condition={Boolean(header)}
                show={
                    <StyledHeader className={headerClasses}>
                        <ConditionallyRender
                            condition={typeof header === 'string'}
                            show={<PageHeader title={header as string} />}
                            elseShow={header}
                        />
                    </StyledHeader>
                }
            />
            <div className={bodyClasses}>{children}</div>
        </StyledPaper>
    );

    if (disableLoading) {
        return content;
    }

    return (
        <PageContentLoading isLoading={isLoading}>{content}</PageContentLoading>
    );
};