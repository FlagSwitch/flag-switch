import { FC } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { StyledProjectListContainer } from './Projects.style';
import ProjectCard from '../ProjectCard/ProjectCard';
export const Projects: FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Button variant="contained" startIcon={<AddIcon />}>
                Add Project
            </Button>
            <StyledProjectListContainer>
                <ProjectCard/>
            </StyledProjectListContainer>
        </Box>
    )
}