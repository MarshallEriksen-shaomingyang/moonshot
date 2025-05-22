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
        components: {
          Card: {},
        },
      }}
    >
      <Card
        hoverable
        classNames={{
          header: '!bg-gray-100 !border-b-0 h-16',
        }}
        variant="borderless"
        title="MCP 工具精选"
        extra={
          <Avatar
            size={42}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className="transition-transform duration-300 hover:rotate-180"
          />
        }
      >
        <Paragraph className="h-16" ellipsis={{ rows: 3 }}>
          MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP 工具介绍MCP
          工具介绍MCP 工具介绍
        </Paragraph>
      </Card>
    </ConfigProvider>
  );
}
