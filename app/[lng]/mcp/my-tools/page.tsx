'use client';
import { useState, useCallback } from 'react';

import { Input, Space } from 'antd';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import IconButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';
import BannerWork from '@/public/images/work.svg';

import MCPCard from '../_components/mcp_card';

import MCPHeader from './_components/mcp-header';

const MCPCreate = dynamic(() => import('./_components/mcp-create'), {
  ssr: false,
});

export default function Page() {
  const [open, setOpen] = useState(false);

  const handleModal = useCallback(() => {
    setOpen((prev: boolean) => !prev);
  }, []);
  return (
    <div className="flex flex-col w-full h-full">
      <MCPCreate open={open} handleModal={handleModal} />
      <MCPHeader handleModal={handleModal} />
      <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
        <ScrollContent>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 h-46">
              <div className="w-1/2">
                <Image
                  src={BannerWork}
                  alt="banner"
                  className="w-full h-full object-fill select-none"
                />
              </div>
              <div className="w-1/2 h-full flex flex-col gap-2 justify-center items-center">
                <Input
                  autoFocus
                  className="!w-72"
                  placeholder="搜索我的工具..."
                  prefix={<Icon iconClass="icon-search" svgClass="w-6 h-6" />}
                />
                <Space>
                  <IconButton size="small" variant="outlined">
                    全部
                  </IconButton>
                  <IconButton size="small" variant="outlined">
                    已启用
                  </IconButton>
                  <IconButton size="small" variant="outlined">
                    未启用
                  </IconButton>
                  <IconButton size="small" variant="outlined">
                    MCP配置
                  </IconButton>
                </Space>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
              <div className="col-span-1">
                <MCPCard />
              </div>
            </div>
          </div>
        </ScrollContent>
      </div>
    </div>
  );
}
