'use client';
import { Form, Input, Select, Switch } from 'antd';
import AntdButton from '@/components/antd-button';

export default function ProviderForm() {
  return (
    <Form
      layout="horizontal"
      className="w-320"
      size="large"
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="提供商名称" name={'provider_name'} required>
        <Input />
      </Form.Item>
      <Form.Item label="提供商简介" name={'provider_describe'}>
        <Input.TextArea />
      </Form.Item>
      {/* TODO: 当用户输入url给用户显示图片和名称 */}
      <Form.Item label="提供商logo" name={'provider_logo'}>
        <Input />
      </Form.Item>
      <Form.Item label="请求方式" name={'provider_sdk'} required>
        <Select>
          <Select.Option value="openai">OpenAI</Select.Option>
          <Select.Option value="claude">claude</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="请求地址" name={'provider_address'} required>
        <Input />
      </Form.Item>
      <Form.Item label="请求密钥" name={'provider_secret'} required>
        <Input.Password />
      </Form.Item>
      <Form.Item label="是否启用" name={'provider_enabled'}>
        <Switch />
      </Form.Item>
      <Form.Item label="">
        <AntdButton block type="primary" htmlType="submit">
          提交
        </AntdButton>
      </Form.Item>
    </Form>
  );
}
