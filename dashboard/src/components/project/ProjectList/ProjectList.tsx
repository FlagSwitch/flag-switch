import { FC } from "react";
import { styled } from '@mui/material';
import ProjectCard from "../ProjectCard/ProjectCard";

const StyledDivContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));

export const ProjectList: FC = () => {
    return (   
        <StyledDivContainer>
            {[1,2,3,4].map(() => {
                return <ProjectCard/>
            })}
        </StyledDivContainer>
     )
}