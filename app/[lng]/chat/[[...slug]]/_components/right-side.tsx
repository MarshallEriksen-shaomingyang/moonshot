'use client';
import { useState } from 'react';

import { Typography, Tooltip, Input } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';

import MoonshotList from './history-list';

export default function RightSidePanel() {
  /**
   * @description 聊天页面历史记录展示
   */
  const [searchState, setSearch] = useState(false);
  return (
    <div className="w-full h-full flex flex-col gap-2 ">
      <ScrollContent>
        <div className="h-10 leading-10 px-1.5 flex justify-between items-center gap-2">
          {searchState ? (
            <Input
              placeholder="搜索历史..."
              variant="filled"
              allowClear
              prefix={
                <Icon iconClass="icon-a-searchbar-search" svgClass="w-4 h-4" />
              }
            />
          ) : (
            <Typography.Title
              className="!text-base !font-semibold !mb-0 !mt-0"
              level={5}
              style={{ color: 'var(--moonshot-text-color)' }}
            >
              Moonshot AI 历史记录
            </Typography.Title>
          )}
          <div className="flex gap-2">
            <Tooltip title="搜索历史" placement="left">
              <AntdButton
                type="primary"
                shape="circle"
                variant="filled"
                size="small"
                onClick={() => setSearch(!searchState)}
                icon={
                  <Icon iconClass="icon-search_list_light" svgClass="w-4 h-4" />
                }
              />
            </Tooltip>
            <Tooltip title="清空历史" placement="left">
              <AntdButton
                danger
                type="primary"
                shape="circle"
                variant="filled"
                size="small"
                icon={<Icon iconClass="icon-delete1-copy" svgClass="w-4 h-4" />}
              />
            </Tooltip>
          </div>
        </div>
        <div className="flex-1">
          <MoonshotList />
        </div>
      </ScrollContent>
    </div>
  );
}
