import { FC } from "react";
import { styled } from '@mui/material';
import { ProjectCard } from "../ProjectCard/ProjectCard";
import {
    useQuery,
  } from '@tanstack/react-query';
import axios from 'axios';
import { Prisma } from 'prisma-client';
const StyledDivContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
    },
}));
type ProjectWithCount = Prisma.ProjectGetPayload<{
    include: {
        _count: true
    }
}>;
export const ProjectList: FC = () => {

    const { isLoading, error, data, isFetching } = useQuery<ProjectWithCount[], Error>({
        queryKey: ["repoData"],
        queryFn: () =>
          axios
            .get("http://localhost:3000/api/projects")
            .then((res: any) => res.data),
      });
    
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>{`An error has occurred: ${error.message}`}</div>
    return (   
        <StyledDivContainer>
            {data.map((project: any) => {
                return <ProjectCard project={project}/>
            })}
        </StyledDivContainer>
     )
}