import { Avatar, Space, Tag, Typography } from 'antd';

import HeaderComponent from '@/components/header';

export default function HeaderContent() {
  return (
    <HeaderComponent>
      <Space size={8}>
        <Avatar />
        <Typography.Title level={4} className="select-none !mb-0">
          智能小管家
        </Typography.Title>
        <Tag className="cursor-pointer" color="cyan">
          gpt4.1-mini
        </Tag>
      </Space>
    </HeaderComponent>
  );
}
