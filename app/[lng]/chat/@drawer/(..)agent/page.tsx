'use client';

import { useMemo, useState } from 'react';

import { Drawer, Space, Input, Spin } from 'antd';
import { useRouter } from 'next/navigation';

import AgentContent from '@/app/[lng]/agent/_components/agent-content';
import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';
import useAgentDrawerStore from '@/store/agent-drawer-store';

export default function AgentParallel() {
  const router = useRouter();
  const { t } = useT('chat');
  const [loading, setLoading] = useState(true); // 搜索时显示loading效果
  // 分别获取单个值，避免返回对象
  const open = useAgentDrawerStore(state => state.open);
  const handleOpenState = useAgentDrawerStore(state => state.handleOpenState);
  const handleEditOpenState = useAgentDrawerStore(
    state => state.handleEditState
  );
  const handleModalOpen = useAgentDrawerStore(state => state.handleModalOpen);

  const searchIcon = useMemo(
    () => (
      <Spin size="small" spinning={loading}>
        <Icon
          iconClass="icon-search"
          svgClass={`w-5 h-5 ${loading ? 'invisible' : 'visible'}`}
        />
      </Spin>
    ),
    [loading]
  );

  const onHandleSearch = () => {
    setLoading(true);
  };

  return (
    <Drawer
      placement="bottom"
      title={t('助手管理')}
      open={open}
      onClose={() => {
        handleOpenState();
        router.back();
      }}
      width="100%"
      height="100%"
      extra={
        <Space>
          <Input
            placeholder={t('搜索助手介绍或关键词')}
            prefix={searchIcon}
            onChange={onHandleSearch}
          />
          <AntdButton
            icon={<Icon iconClass="icon-edit" svgClass="w-5 h-5" />}
            onClick={handleEditOpenState}
          >
            {t('创建助手')}
          </AntdButton>
          <AntdButton
            icon={<Icon iconClass="icon-add1" svgClass="w-4 h-4" />}
            onClick={handleModalOpen}
          >
            {t('创建分组')}
          </AntdButton>
        </Space>
      }
    >
      <AgentContent />
    </Drawer>
  );
}
