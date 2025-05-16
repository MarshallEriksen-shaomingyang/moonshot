'use client';
import { useState } from 'react';

import { Typography, Input, Space } from 'antd';

import Icon from '@/components/icon';

import AssistantCard from './assistant-card';
import AssistantContent from './assistant-content';
import AssistantSearchContent from './assistant-search-content';

const { Title } = Typography;

export default function AssistantSider() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="h-screen w-full select-none py-1 rounded-md flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain scroll-hover-hide ">
      <div className="flex justify-center items-center h-[var(--moonshot-layout-header-height)]">
        <Title className="subpixel-antialiase text-center bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text !text-transparent !mb-0 !mt-2">
          Moonshot&nbsp;AI
        </Title>
      </div>
      <div className="w-full px-1 mt-9">
        <Input
          size="large"
          placeholder="搜索助手..."
          variant="filled"
          allowClear
          prefix={
            <Icon iconClass="icon-a-searchbar-search" svgClass="w-4 h-4" />
          }
          onChange={handleSearch}
        />
        <div className="w-full mt-4">
          {searchTerm ? (
            <AssistantSearchContent />
          ) : (
            <Space direction="vertical" className="w-full">
              <div className="px-2">
                <AssistantCard title="默认助手" />
              </div>

              <AssistantContent />
            </Space>
          )}
        </div>
      </div>
    </div>
  );
}
