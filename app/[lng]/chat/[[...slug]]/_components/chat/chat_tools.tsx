'use client';
import { Sender } from '@ant-design/x';
import { Space } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

export default function ChatTools() {
  return (
    <Sender.Header
      className="!bg-background !border-none !rounded-none"
      closable={false}
      title={
        <Space>
          <AntdButton
            type="text"
            icon={<Icon iconClass="icon-openai" svgClass="w-5 h-5" />}
          />
          <AntdButton
            type="text"
            icon={<Icon iconClass="icon-adjustment" svgClass="w-5 h-5" />}
          />
          <AntdButton
            type="text"
            icon={<Icon iconClass="icon-app" svgClass="w-5 h-5" />}
          />
        </Space>
      }
    />
  );
}
