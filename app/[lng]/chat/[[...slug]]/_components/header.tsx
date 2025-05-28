import { Avatar, Space, Tag, Typography } from 'antd';

import HeaderComponent from '@/components/header';

export default function HeaderContent() {
  return (
    <HeaderComponent>
      <Space size={8}>
        <Avatar />
        <Typography.Title
          level={5}
          className="select-none !text-base !font-semibold !mb-0 !mt-0"
        >
          助手名称
        </Typography.Title>
        <Tag className="cursor-pointer" color="var(--primary-color)">
          gpt4.1-mini
        </Tag>
      </Space>
    </HeaderComponent>
  );
}
