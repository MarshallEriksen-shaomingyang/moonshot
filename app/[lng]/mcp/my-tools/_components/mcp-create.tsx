'use client';
import { memo } from 'react';

import { Modal } from 'antd';

import ScrollContent from '@/components/scroll-content';

import MCPForm from '../../_components/mcp_form';

interface ModalType {
  open: boolean;
  handleModal: () => void;
}

const MCPCreate = ({ open, handleModal }: ModalType) => {
  return (
    <Modal
      open={open}
      title="创建新工具"
      width={800}
      okText="创建"
      cancelText="取消"
      onCancel={handleModal}
      onOk={() => {}}
    >
      <ScrollContent>
        <div className="mt-6 w-full h-full ">
          <MCPForm />
        </div>
      </ScrollContent>
    </Modal>
  );
};
export default memo(MCPCreate);
