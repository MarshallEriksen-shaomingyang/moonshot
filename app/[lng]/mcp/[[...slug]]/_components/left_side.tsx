'use client';
import { useCallback } from 'react';

import { Typography } from 'antd';
import { usePathname } from 'next/navigation';

import ListButton from '@/components/list-button';

export default function LeftSide() {
  const pathname = usePathname();
  const isActive = useCallback(
    (path: string) => {
      // 移除语言前缀（如 /zh/）并比较路径
      const normalizedPathname = pathname.replace(/^\/[a-z]{2}\//, '');
      return normalizedPathname === path;
    },
    [pathname]
  );
  const data = [
    {
      title: 'MCP工具精选',
      'icon-dark': 'icon-Star',
      'icon-light': 'icon-Star-copy',
      path: 'mcp',
    },
    {
      title: '我的MCP工具',
      'icon-dark': 'icon-Star',
      'icon-light': 'icon-Star-copy',
      path: 'mcp/my-tools',
    },
    {
      title: '聚合器',
      'icon-dark': 'icon-robot',
      'icon-light': 'icon-robot-copy',
      path: '/',
    },
    {
      title: '自动化',
      'icon-dark': 'icon-robot',
      'icon-light': 'icon-robot-copy',
      path: '/',
    },
    {
      title: ' 艺术与文化',
      'icon-dark': 'icon-robot',
      'icon-light': 'icon-robot-copy',
      path: '/',
    },
    {
      title: '浏览器自动化',
      'icon-dark': 'icon-robot',
      'icon-light': 'icon-robot-copy',
      path: '/',
    },
    {
      title: '云平台',
      'icon-dark': 'icon-robot',
      'icon-light': 'icon-robot-copy',
      path: '/',
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-[var(--moonshot-layout-header-height)]">
        <Typography.Title className="subpixel-antialiase text-center bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text !text-transparent !mb-0">
          Moonshot&nbsp;MCP
        </Typography.Title>
      </div>
      <ListButton data={data} size="default" isActive={isActive} />
    </div>
  );
}
