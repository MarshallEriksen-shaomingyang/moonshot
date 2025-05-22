'use client';
import { Input, Typography } from 'antd';

import HeaderComponent from '@/components/header';

const { Search } = Input;
const { Title } = Typography;
export default function MCPHeader() {
  return (
    <HeaderComponent>
      <div className="w-full flex gap-4 items-center">
        <Title level={4} className="!mb-0">
          MCP 工具精选
        </Title>
        <Search
          autoFocus
          placeholder="搜索MCP工具"
          allowClear
          enterButton="Search"
          className="!w-64"
        />
      </div>
    </HeaderComponent>
  );
}
