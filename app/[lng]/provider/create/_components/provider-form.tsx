'use client';
import { Form, Input, Select, Switch } from 'antd';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

export default function ProviderForm() {
  const { t } = useT('provider');
  return (
    <Form layout="horizontal" className="w-320" size="large">
      <Form.Item label={t('提供商名称')} name={'provider_name'} required>
        <Input placeholder={t('请输入提供商名称 OpenAI')} />
      </Form.Item>
      <Form.Item label={t('提供商图标')} name={'provider_logo'}>
        <Input />
      </Form.Item>
      <Form.Item label={t('提供商类型')} name={'provider_sdk'} required>
        <Select>
          <Select.Option value="openai">OpenAI</Select.Option>
          <Select.Option value="claude">claude</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label={t('提供商地址')} name={'provider_address'} required>
        <Input placeholder={t('请输入提供商地址 https://api.openai.com')} />
      </Form.Item>
      <Form.Item label={t('提供商密钥')} name={'provider_secret'} required>
        <Input.Password
          placeholder={t('请输入提供商密钥 sk-****-****-****-****-****')}
        />
      </Form.Item>
      <Form.Item label={t('是否启用')} name={'provider_enabled'}>
        <Switch />
      </Form.Item>
      <Form.Item label="">
        <div className="flex justify-end">
          <AntdButton type="primary" htmlType="submit">
            {t('保存')}
          </AntdButton>
        </div>
      </Form.Item>
    </Form>
  );
}
