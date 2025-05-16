'use client';
import { Table, Typography } from 'antd';
import type { TableProps } from 'antd';

import type { ModalType } from '@/app/[lng]/provider/types';

const columns: TableProps<ModalType>['columns'] = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
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
      <div className="flex justify-between">
        <Typography.Title className="!mb-0" level={5}>
          模型列表
        </Typography.Title>
      </div>
      <Table<ModalType>
        columns={columns}
        rowSelection={{ type: 'checkbox' }}
        dataSource={data}
      />
    </div>
  );
}
