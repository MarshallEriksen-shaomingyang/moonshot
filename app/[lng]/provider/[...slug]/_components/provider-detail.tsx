'use client';
import { Input, Typography, Select } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

export default function ProviderDetail() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-1  flex flex-col">
          <Typography.Title className="!mb-0" level={5}>
            API Key
          </Typography.Title>
          <Typography.Text>请输入供应商提供的API Key</Typography.Text>
        </div>
        <div className="col-span-2 shrink grow">
          <Input.Password placeholder="请输入你的API Key" />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-1 flex flex-col">
          <Typography.Title className="!mb-0" level={5}>
            API 代理地址
          </Typography.Title>
          <Typography.Text>请输入包括(https)的完整路径名</Typography.Text>
        </div>
        <div className="col-span-2 shrink grow">
          <Input placeholder="https://moonshot.com/api/" />
        </div>
      </div>
      <div className="grid grid-cols-3 items-center">
        <div className="col-span-1">
          <Typography.Title className="!mb-0" level={5}>
            连通性检查
          </Typography.Title>
        </div>
        <div className="col-span-2 flex gap-2 shrink grow items-center">
          <Select className="w-full">
            <Select.Option value="Gemini 2.0 Flash">
              Gemini 2.0 Flash
            </Select.Option>
            <Select.Option value="Gemini 2.5 Flash">
              Gemini 2.0 Flash
            </Select.Option>
          </Select>
          <AntdButton type="primary" variant="outlined" secondary size="small">
            检查
          </AntdButton>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] mt-4">
        <div className="col-start-2">
          <Icon iconClass="icon-buoumao" svgClass="w-10 h-10" />
          <Typography.Paragraph className="text-center select-none">
            我们会保护好你的API Key 和代理地址请保护好你的
            <Typography.Text strong>Secret Key</Typography.Text>.
          </Typography.Paragraph>
        </div>
      </div>
    </div>
  );
}
