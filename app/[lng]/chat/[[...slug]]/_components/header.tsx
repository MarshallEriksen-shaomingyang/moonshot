import HeaderComponent from '@/components/header';
import { Avatar, Space, Tag, Typography } from 'antd';

export default function HeaderContent() {
  return (
    <HeaderComponent>
      <Space size={8}>
        <Avatar />
        <Typography.Title level={4} className="select-none !mb-0">
          智能小管家
        </Typography.Title>
        <Tag className="cursor-pointer" color="primary">
          gpt4.1-mini
        </Tag>
      </Space>
    </HeaderComponent>
  );
}
