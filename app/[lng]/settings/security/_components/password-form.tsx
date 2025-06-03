'use client';
import { Form, Input, Typography } from 'antd';
// import type { FormProps } from 'antd';

import { useT } from '@/app/i18n/client';
import IconButton from '@/components/antd-button';

type FieldType = {
  oldPassword: string;
  password: string;
  rePassword: string;
};

const { Title } = Typography;

export default function PasswordForm() {
  const { t } = useT('settings');
  return (
    <div className="flex flex-col gap-3">
      <Title level={4} className="mb-8 select-none">
        {t('个人资料详情')}
      </Title>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label={t('旧密码')}
          name="oldPassword"
          rules={[{ required: true, message: t('请输入密码!') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label={t('密码')}
          name="password"
          rules={[{ required: true, message: t('请输入密码!') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label={t('重新输入新密码')}
          name="rePassword"
          rules={[{ required: true, message: t('请输入密码!') }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <IconButton type="primary" secondary htmlType="submit">
            {t('更新')}
          </IconButton>
        </Form.Item>
      </Form>
    </div>
  );
}
