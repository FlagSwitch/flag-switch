import React, { FC, ReactNode } from 'react';
import classnames from 'classnames';
import { PageHeader } from '../PageHeader/PageHeader';
import { PaperProps } from '@mui/material';
import { StyledHeader, StyledPaper, StyledBody } from './PageContent.style';
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
                    <StyledHeader>
                        <ConditionallyRender
                            condition={typeof header === 'string'}
                            show={<PageHeader title={header as string} />}
                            elseShow={header}
                        />
                    </StyledHeader>
                }
            />
            <StyledBody>{children}</StyledBody>
        </StyledPaper>
    );

    if (disableLoading) {
        return content;
    }

    return (
        <PageContentLoading isLoading={isLoading}>{content}</PageContentLoading>
    );
};