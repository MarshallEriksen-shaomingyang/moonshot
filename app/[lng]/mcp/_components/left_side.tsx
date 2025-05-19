'use client';
import { List, Typography } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

const data = [
  {
    title: 'MCP工具精选',
    icon: 'icon-settings',
    href: '/',
  },
  {
    title: '聚合器',
    icon: 'icon-settings',
    href: '/',
  },
  {
    title: ' 艺术与文化',
    icon: 'icon-settings',
    href: '/',
  },
  {
    title: '浏览器自动化',
    icon: 'icon-settings',
    href: '/',
  },
  {
    title: '云平台',
    icon: 'icon-settings',
    href: '/',
  },
];

export default function LeftSide() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-[var(--moonshot-layout-header-height)]">
        <Typography.Title className="subpixel-antialiase text-center bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text !text-transparent !mb-0 !mt-2">
          Moonshot&nbsp;MCP
        </Typography.Title>
      </div>
      <List
        className="!pt-6 px-4 h-[calc(100vh-var(--moonshot-layout-header-height))] overflow-y-auto scroll-smooth scroll-hover-hide"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item className="!border-none">
            <AntdButton
              type="text"
              variant="borderless"
              block
              icon={<Icon iconClass={item.icon} svgClass="h-8 w-8" />}
            >
              <Typography.Text ellipsis className="w-24">
                {item.title}
              </Typography.Text>
            </AntdButton>
          </List.Item>
        )}
      />
    </div>
  );
}
