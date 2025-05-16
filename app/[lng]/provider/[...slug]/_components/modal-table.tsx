'use client';
import { Table } from 'antd';
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
  return <Table<ModalType> columns={columns} dataSource={data} />;
}
