import React, { useContext } from 'react';
import {  Menu as AntMenu } from 'antd';
import { useNavigate } from "react-router-dom";
import { MenuInfo } from 'rc-menu/lib/interface';
import { DarkModeContext } from '../../context/DarkModeContext';
import {
    BarChartOutlined,
    ProjectOutlined,
    TeamOutlined,
    FlagOutlined,
    SettingOutlined
  } from '@ant-design/icons';

export const Menu: React.FC = () =>{
    const navigate = useNavigate();
    const { theme: darkTheme } = useContext(DarkModeContext);
    const onMenuSelect = (menuInfo: MenuInfo) => {
        navigate(menuInfo.key);
    }
    return (
        <AntMenu
            onSelect={onMenuSelect}
            theme={darkTheme}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {
                    key: 'overview',
                    icon: <BarChartOutlined />,
                    label: 'Overview',
                },
                {
                    key: 'projects',
                    icon: <ProjectOutlined />,
                    label: 'Projects',
                },
                {
                    key: 'features',
                    icon: <FlagOutlined />,
                    label: 'Features',
                },
                {
                    key: 'users',
                    icon: <TeamOutlined />,
                    label: 'Users',
                }
            ]}
        />
    )
}