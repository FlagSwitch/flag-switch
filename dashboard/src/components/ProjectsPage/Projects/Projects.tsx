import React, { useState } from 'react';
import { StyledProjectsHeader } from './Projects.style';
import { Input, Button, Modal } from 'antd';
import ProjectItem from '../ProjectItem';
import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;

export const Projects: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [openNewProjectModal, setOpenNewProjectModal] = useState(false);
    const onChange = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }
    return (
        <>
            <Modal
                title="Modal 1000px width"
                centered
                maskClosable={false}
                open={openNewProjectModal}
                onOk={() => setOpenNewProjectModal(false)}
                onCancel={() => setOpenNewProjectModal(false)}
                width={1000}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
            <StyledProjectsHeader>
                <Search placeholder="Search project" loading={loading} enterButton onChange={onChange} allowClear />
                <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpenNewProjectModal(!openNewProjectModal)} >
                    Add project
                </Button>
            </StyledProjectsHeader>
            
            <ProjectItem/>
        </>
    )
}