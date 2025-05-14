import { useState } from 'react';
import { Layout, Tooltip } from 'antd';
import AntdSearchInput from '@/components/antd-input-search';
import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';

export default function ModalLists() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Layout className="h-full flex flex-col gap-4 !bg-background">
      <div className="px-2 h-[var(--ant-layout-header-height)] mt-2 flex justify-between gap-2 items-center">
        <AntdSearchInput
          size="middle"
          placeholder="搜索助手"
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
      <div>列表</div>
    </Layout>
  );
}
