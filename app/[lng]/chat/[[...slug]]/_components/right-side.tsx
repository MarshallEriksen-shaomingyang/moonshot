'use client';
import { Typography, Input, Tooltip, Splitter } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';

import MoonshotList from './history-list';

export default function RightSidePanel() {
  return (
    <Splitter layout="vertical" className="w-full h-full flex flex-col gap-2 ">
      <Splitter.Panel
        collapsible
        defaultSize={'45%'}
        min={'0%'}
        max={'45%'}
        className="w-full flex flex-col scroll-hover-hide !overflow-hidden"
      >
        <div className="h-10 px-1.5 display flex justify-between items-center">
          <Typography.Title
            className="tracking-wide !mb-0 select-none"
            level={5}
          >
            角色
          </Typography.Title>
          <Tooltip title="修改角色" placement="left">
            <AntdButton
              type="primary"
              shape="circle"
              variant="filled"
              size="small"
              icon={<Icon iconClass="icon-Edit" svgClass="w-10 h-10" />}
            />
          </Tooltip>
        </div>
        <Input.TextArea
          variant="borderless"
          className="flex-1 !cursor-pointer h-full w-full"
          placeholder="请输入内容"
          readOnly
          autoComplete="off"
          rows={4}
        />
      </Splitter.Panel>
      <Splitter.Panel collapsible defaultSize={'55%'} min={'0%'} max={'100%'}>
        <ScrollContent>
          <div className="h-10 leading-10 px-1.5 flex justify-between">
            <Typography.Title level={5} className="tracking-wide select-none">
              历史记录
            </Typography.Title>
            <div className="flex gap-2">
              <Tooltip title="搜索历史" placement="left">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="small"
                  icon={
                    <Icon
                      iconClass="icon-search_list_light"
                      svgClass="w-8 h-8"
                    />
                  }
                />
              </Tooltip>
              <Tooltip title="清空历史" placement="left">
                <AntdButton
                  type="primary"
                  shape="circle"
                  variant="filled"
                  size="small"
                  icon={<Icon iconClass="icon-delete" svgClass="w-10 h-10" />}
                />
              </Tooltip>
            </div>
          </div>
          <div className="flex-1 p-2">
            <MoonshotList />
          </div>
        </ScrollContent>
      </Splitter.Panel>
    </Splitter>
  );
}
