'use client';
import { Avatar, List, Typography } from 'antd';

import ScrollContent from '@/components/scroll-content';

const data = [
  {
    title: 'Gemini',
  },
  {
    title: 'ChatGPT',
  },
  {
    title: 'Moonshot',
  },
  {
    title: 'Deepseek',
  },
];

export default function ModelChoose() {
  return (
    <div className="w-sm">
      <ScrollContent>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item className="cursor-pointer">
              <div className="flex gap-2 items-center">
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
                <Typography.Text className="font-semibold tracking-wider">
                  {item.title}
                </Typography.Text>
              </div>
            </List.Item>
          )}
        />
      </ScrollContent>
    </div>
  );
}
