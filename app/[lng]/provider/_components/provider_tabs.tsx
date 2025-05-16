'use client';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Icon from '@/components/icon';
import ModalActionCard from './provider-action-card';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '已启用',
    children: <ModalActionCard />,
    icon: <Icon iconClass="icon-hashiqi" svgClass="w-12 h-12" />,
  },
  {
    key: '2',
    label: '未启用',
    children: <ModalActionCard />,
    icon: <Icon iconClass="icon-nainiumao" svgClass="w-12 h-12" />,
  },
];

export default function ProviderTabs() {
  const handleChange = (key: string) => {
    console.log(key);
  };
  return <Tabs defaultActiveKey="1" items={items} onChange={handleChange} />;
}
