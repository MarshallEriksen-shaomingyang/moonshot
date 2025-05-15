import { useState } from 'react';
import { Layout, Tooltip, List } from 'antd';
import AntdSearchInput from '@/components/antd-input-search';
import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';
import ModalCard from './provider_card';
import ModalSearch from './provider-search';

// TODO: 这里的需要根据模型是否启用来排序
const data = [
  {
    id: '1',
    name: '模型1',
    enabled: true,
  },
  {
    id: '2',
    name: '模型2',
    enabled: false,
  },
  {
    id: '3',
    name: '模型3',
    enabled: true,
  },
  {
    id: '4',
    name: '模型4',
    enabled: false,
  },
  {
    id: '5',
    name: '模型5',
    enabled: true,
  },
  {
    id: '6',
    name: '模型6',
    enabled: false,
  },
];

export default function ModalLists() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Layout className="h-full flex flex-col gap-4 !bg-background overflow-x-hidden scroll-hover-hide scroll-smoth">
      <div className="px-2 h-[var(--moonshot-layout-header-height)] mt-2 flex justify-between gap-2 items-center">
        <AntdSearchInput
          size="middle"
          placeholder="搜索模型"
          onChange={handleSearch}
          value={searchTerm}
        />
        <Tooltip title="添加自定义模型" placement="bottom">
          <AntdButton
            shape="circle"
            type="primary"
            size="middle"
            icon={<Icon iconClass="icon-Edit" svgClass="w-12 h-12" />}
          ></AntdButton>
        </Tooltip>
      </div>
      <div className="h-[calc(100vh-var(--moonshot-layout-header-height))] overflow-y-auto scroll-hover-hide scroll-smooth px-2">
        {searchTerm == '' ? (
          <List
            itemLayout="vertical"
            bordered={false}
            dataSource={data}
            renderItem={item => (
              <List.Item className="!border-none">
                <ModalCard
                  id={item.id}
                  name={item.name}
                  enabled={item.enabled}
                />
              </List.Item>
            )}
          />
        ) : (
          <ModalSearch searchContent={[]} />
        )}
      </div>
    </Layout>
  );
}
