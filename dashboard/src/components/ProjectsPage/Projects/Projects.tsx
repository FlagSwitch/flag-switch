import React, { useState } from 'react';
import { StyledProjectsHeader } from './Projects.style';
import { Input, Button } from 'antd';
import ProjectItem from '../ProjectItem';
import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;

export const Projects: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const onChange = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
    return (
        <>
            <StyledProjectsHeader>
                <Search placeholder="Search project" loading={loading} enterButton onChange={onChange} allowClear />
                <Button type="primary" icon={<PlusOutlined />} >
                    Add project
                </Button>
            </StyledProjectsHeader>
            
            <ProjectItem/>
        </>
    )
}