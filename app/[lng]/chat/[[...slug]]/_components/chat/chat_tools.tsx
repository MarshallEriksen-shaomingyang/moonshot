'use client';
import { Sender } from '@ant-design/x';
import { Space, Popover } from 'antd';
import dynamic from 'next/dynamic';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

const ModelAdjustment = dynamic(() => import('./model_adjustment'), {
  ssr: false,
});

// const ModelChoose = dynamic(() => import('./model_choose'), {
//   ssr: false,
// });

const ModelChooseDetail = dynamic(() => import('./model_choose_detail'), {
  ssr: false,
});

const ModelMcp = dynamic(() => import('./model_mcp'), {
  ssr: false,
});

export default function ChatTools() {
  return (
    <Sender.Header
      className="!bg-background !border-none !rounded-none"
      closable={false}
      title={
        <Space>
          <Popover
            content={<ModelChooseDetail />}
            trigger="click"
            placement="top"
          >
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-openai" svgClass="w-5 h-5" />}
            />
          </Popover>

          <Popover
            content={<ModelAdjustment />}
            trigger="click"
            placement="top"
          >
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-adjustment" svgClass="w-5 h-5" />}
            />
          </Popover>
          <Popover content={<ModelMcp />} trigger="click" placement="top">
            <AntdButton
              type="text"
              icon={<Icon iconClass="icon-app" svgClass="w-5 h-5" />}
            />
          </Popover>
        </Space>
      }
    />
  );
}
