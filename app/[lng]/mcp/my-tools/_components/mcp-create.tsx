'use client';
import { useState, memo } from 'react';

import { Modal, Form, Input, Select } from 'antd';

import Icon from '@/components/icon';
import ScrollContent from '@/components/scroll-content';

import { MCPCreateAction } from '../types';

import MCPToolForm from './mcp-package';
import McpUrlForm from './mcp-url';

interface ModalType {
  open: boolean;
  handleModal: () => void;
}

const MCPCreate = ({ open, handleModal }: ModalType) => {
  const [action, setAction] = useState<MCPCreateAction>('http');

  const handleActionChange = (value: MCPCreateAction) => {
    setAction(value);
  };
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
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            autoComplete="off"
          >
            <Form.Item
              label="工具名称"
              name="toolName"
              rules={[{ required: true, message: '请输入工具名称!' }]}
              tooltip={{
                title: '名称请输入英文',
                icon: <Icon iconClass="icon-info" svgClass="w-4 h-4 ml-2" />,
              }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="工具类型"
              name="toolType"
              rules={[{ required: true, message: '请选择工具类型!' }]}
              tooltip={{
                title: '名称请输入英文',
                icon: <Icon iconClass="icon-info" svgClass="w-4 h-4 ml-2" />,
              }}
            >
              <Select
                defaultValue={'http'}
                options={[
                  { value: 'http', label: 'http/https' },
                  { value: 'socket', label: 'socket' },
                  { value: 'uvx', label: 'uvx' },
                  { value: 'npx', label: 'npx' },
                  { value: 'Node', label: 'Node', disabled: true },
                  { value: 'python', label: 'python', disabled: true },
                ]}
                onChange={handleActionChange}
              />
            </Form.Item>
            {action === 'http' || action === 'socket' ? <McpUrlForm /> : null}
            {action === 'uvx' || action === 'npx' ? <MCPToolForm /> : null}
            <Form.Item label="github地址" name="github">
              <Input />
            </Form.Item>
            <Form.Item label="介绍" name="describe">
              <Input.TextArea rows={4} />
            </Form.Item>
          </Form>
        </div>
      </ScrollContent>
    </Modal>
  );
};
export default memo(MCPCreate);
