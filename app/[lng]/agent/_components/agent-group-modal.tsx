'use client';
import { FormOutlined } from '@ant-design/icons';
import { Modal, Input } from 'antd';

import { useT } from '@/app/i18n/client';
import useAgentDrawerStore from '@/store/agent-drawer-store';

export default function AgentGroupModal() {
  const { t } = useT('chat');
  const modalOpen = useAgentDrawerStore(state => state.modalOpen);
  const handleModalOpen = useAgentDrawerStore(state => state.handleModalOpen);
  return (
    <Modal
      title={t('创建分组')}
      open={modalOpen}
      onOk={handleModalOpen}
      onCancel={handleModalOpen}
      okText={t('创建')}
      cancelText={t('取消')}
    >
      <div className="my-6">
        <Input prefix={<FormOutlined />} placeholder={t('请输入分组名称')} />
      </div>
    </Modal>
  );
}
