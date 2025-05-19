'use client';
import { Card, ConfigProvider, Typography, Avatar } from 'antd';

const { Paragraph } = Typography;
export default function MCPCard() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: 'var(--primary-color)',
        },
      }}
    >
      <Card
        hoverable
        className="w-full h-full cursor-pointer"
        variant="borderless"
        title="MCP 工具精选"
        extra={<Avatar />}
      >
        <Paragraph className="h-10" ellipsis={{ rows: 2 }}>
          MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP
          工具介绍MCP 工具介绍
        </Paragraph>
      </Card>
    </ConfigProvider>
  );
}
