import { FC } from "react";
import { PageContent } from '../../common/Page/PageContent/PageContent';
import { PageHeader } from '../../common/Page/PageHeader/PageHeader';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import FeatureTable from '../FeatureTable/FeatureTable'
export const Features: FC = () => {
    return (
        <PageContent
            isLoading={false}
            header={
                <PageHeader
                    title={`Features (1)`}
                    actions={
                        <Button variant="contained" startIcon={<AddIcon />}>
                            Add Feature
                        </Button>
                    }
                /> }
        >
            <FeatureTable/>
        </PageContent>
    )
}