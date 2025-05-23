'use client';
import { useCallback } from 'react';

import { Typography } from 'antd';
import { usePathname } from 'next/navigation';

import ListButton from '@/components/list-button';

export default function LeftSide() {
  const pathname = usePathname();
  const isActive = useCallback((path: string) => pathname === path, [pathname]);
  const data = [
    {
      title: 'MCP工具精选',
      'icon-dark': 'icon-settings',
      path: '/',
    },
    {
      title: '聚合器',
      'icon-light': 'icon-settings',
      path: '/',
    },
    {
      title: ' 艺术与文化',
      'icon-light': 'icon-settings',
      path: '/',
    },
    {
      title: '浏览器自动化',
      'icon-light': 'icon-settings',
      path: '/',
    },
    {
      title: '云平台',
      'icon-light': 'icon-settings',
      path: '/',
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center h-[var(--moonshot-layout-header-height)]">
        <Typography.Title className="subpixel-antialiase text-center bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text !text-transparent !mb-0 !mt-2">
          Moonshot&nbsp;MCP
        </Typography.Title>
      </div>
      <ListButton data={data} size="small" isActive={isActive} />
    </div>
  );
}
