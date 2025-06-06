'use client';
import { Avatar, List, Typography, Switch } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';
const data = ['github1.', 'github2', 'github3.', 'github4.', 'github5.'];

export default function ModelMcp() {
  /**
   * @description 展示用户的mcp工具
   */
  return (
    <div className="m-w-xl">
      <ScrollContent>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div className="flex w-full flex-nowrap justify-between items-center gap-12">
                <div className="flex gap-1">
                  <Avatar
                    size="small"
                    src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                  />
                  <Typography.Title
                    level={5}
                    className="!text-sm !font-medium !mb-0 !top-0"
                  >
                    {item}
                  </Typography.Title>
                  <Icon iconClass="icon-dot" svgClass="w-5 h-5" />
                </div>
                <div className="flex gap-2 items-center">
                  <AntdButton
                    size="small"
                    type="text"
                    icon={<Icon iconClass="icon-edit" svgClass="w-5 h-5" />}
                  />
                  <AntdButton
                    size="small"
                    type="text"
                    icon={<Icon iconClass="icon-refresh" svgClass="w-5 h-5" />}
                  />
                  <AntdButton
                    size="small"
                    type="text"
                    icon={<Icon iconClass="icon-delete1" svgClass="w-5 h-5" />}
                  />
                  <Switch size="small" defaultChecked />
                </div>
              </div>
            </List.Item>
          )}
        />
      </ScrollContent>
    </div>
  );
}
