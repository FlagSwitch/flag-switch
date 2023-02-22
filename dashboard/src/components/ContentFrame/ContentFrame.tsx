import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Card } from 'antd';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
const { Content } = Layout;

export const ContentFrame: React.FC = () => {
    return (
        <Content
            style={{
              margin: '6px 16px',
              padding: 24,
              minHeight: 280
            }}
          >
            <div style={{marginBottom: '8px', marginLeft: '5px'}}>
              <Breadcrumbs />
            </div>
            <Card style={{ width: '100%', height: '100%' }}>
              <Outlet/>
            </Card>
        </Content>
    )
}