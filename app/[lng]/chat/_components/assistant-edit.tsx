'use client';
import { Modal } from 'antd';

import ScrollContent from '@/components/scroll-content';

export default function AssistantEdit() {
  /**
   * @description 编辑助手组件
   * @returns {JSX.Element}
   */
  return (
    <Modal
      open
      title="创建新工具"
      width={800}
      okText="创建"
      cancelText="取消"
      onOk={() => {}}
    >
      <ScrollContent>
        <div className="mt-6 w-full h-full ">hello world</div>
      </ScrollContent>
    </Modal>
  );
}
