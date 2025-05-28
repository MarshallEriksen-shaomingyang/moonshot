'use client';
import { List, Typography, Avatar } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="col-span-1">
        <AntdButton
          size="small"
          type="primary"
          secondary
          icon={
            <Icon
              iconClass="icon-Arrows_Arrow_Narrow_Left"
              svgClass="w-5 h-5"
            />
          }
        >
          返回
        </AntdButton>
      </div>

      <div className="col-span-2 flex gap-2 items-center col-start-1">
        <Avatar
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          size="small"
        />
        <Typography.Title level={5} className="!mb-0">
          Moonshot
        </Typography.Title>
      </div>
    </div>
  );
};

export default function ModelChooseDetail() {
  /**
   * @description 选择model详情
   */
  return (
    <div className="w-sm">
      <ScrollContent>
        <List
          header={<Header />}
          bordered={false}
          dataSource={data}
          renderItem={item => (
            <List.Item className="cursor-pointer">
              <div className="flex gap-3">
                <Avatar
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                  size="small"
                />
                <Typography.Text>{item}</Typography.Text>
              </div>
            </List.Item>
          )}
        />
      </ScrollContent>
    </div>
  );
}
