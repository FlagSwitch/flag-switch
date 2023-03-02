import { FC } from "react";
import { PageContent } from '../../common/Page/PageContent/PageContent';
import { PageHeader } from '../../common/Page/PageHeader/PageHeader';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export const States: FC = () => {
    return (
        <PageContent
            isLoading={false}
            header={
                <PageHeader
                    title={`States (1)`}
                    actions={
                        <Button variant="contained" startIcon={<AddIcon />}>
                            Add State
                        </Button>
                    }
                /> 
            }
            
        >
        </PageContent>
    )
}