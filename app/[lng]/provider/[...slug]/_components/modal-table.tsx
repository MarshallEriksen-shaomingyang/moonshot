'use client';
import { Table, Typography, Tooltip, Space, Tag } from 'antd';
import type { TableProps } from 'antd';

import type { ModalType } from '@/app/[lng]/provider/types';
import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

const columns: TableProps<ModalType>['columns'] = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '模型能力',
    dataIndex: 'tags',
    key: 'tags',
    render: tags => (
      <>
        {tags.map((tag: string) => (
          <Tag color="cyan" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: '动作',
    key: 'action',
  },
];

const data: ModalType[] = [
  {
    id: '1',
    name: 'John Brown',
    tags: ['Nice', 'Developer'],
    enabled: true,
  },
];

export default function ModalTable() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Typography.Title level={5}>模型列表</Typography.Title>
        <Space.Compact>
          <Tooltip title="添加模型" placement="bottomLeft">
            <AntdButton
              type="primary"
              size="small"
              icon={
                <Icon iconClass="icon-add" svgClass="w-8 h-8" fill="#fff" />
              }
            />
          </Tooltip>
          <Tooltip title="启用模型" placement="bottomLeft">
            <AntdButton type="primary" secondary size="small">
              启用模型
            </AntdButton>
          </Tooltip>
          <Tooltip title="删除模型" placement="bottomLeft">
            <AntdButton
              danger
              size="small"
              icon={<Icon iconClass="icon-delete1" svgClass="w-8 h-8" />}
            />
          </Tooltip>
          <Tooltip title="禁用模型" placement="bottomLeft">
            <AntdButton danger type="primary" secondary size="small">
              禁用模型
            </AntdButton>
          </Tooltip>
        </Space.Compact>
      </div>
      <Table<ModalType>
        columns={columns}
        rowSelection={{ type: 'checkbox' }}
        dataSource={data}
      />
    </div>
  );
}
