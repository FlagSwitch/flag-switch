import React, { useState } from 'react';
import { EditOutlined,EllipsisOutlined,SettingOutlined } from '@ant-design/icons';
import { Avatar,Card,Skeleton } from 'antd';

const { Meta } = Card;

export const ProjectItem: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
  );
};