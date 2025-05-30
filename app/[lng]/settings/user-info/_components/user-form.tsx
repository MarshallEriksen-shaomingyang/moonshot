'use client';
import { useState } from 'react';

import { Form, Input } from 'antd';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

interface UserInfoFormValues {
  username: string;
  email: string;
  phone?: string;
  bio?: string;
}

export default function UserForm() {
  const { t } = useT('settings');
  const [formData, setFormData] = useState<UserInfoFormValues>({
    username: 'User123',
    email: 'user@example.com',
    phone: '',
    bio: '',
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    return;
  };
  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      className="[&_.ant-form-item]:mb-6"
    >
      <Form.Item
        label={t('用户名')}
        name="username"
        rules={[{ required: true, message: t('请输入用户名') }]}
      >
        <Input
          value={formData.username}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-[rgba(150,173,233,0.2)] rounded-xl focus:outline-none focus:border-[#6147FF] focus:ring-2 focus:ring-[rgba(97,71,255,0.1)]"
        />
      </Form.Item>

      <Form.Item
        label={t('邮箱')}
        name="email"
        rules={[
          { required: true, message: t('请输入邮箱') },
          { type: 'email', message: t('邮箱格式不正确') },
        ]}
      >
        <Input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-[rgba(150,173,233,0.2)] rounded-xl focus:outline-none focus:border-[#6147FF] focus:ring-2 focus:ring-[rgba(97,71,255,0.1)]"
        />
      </Form.Item>

      <Form.Item label={t('手机号码')} name="phone">
        <Input
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-[rgba(150,173,233,0.2)] rounded-xl focus:outline-none focus:border-[#6147FF] focus:ring-2 focus:ring-[rgba(97,71,255,0.1)]"
        />
      </Form.Item>

      <Form.Item label={t('个人简介')} name="bio">
        <Input.TextArea
          rows={4}
          value={formData.bio}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-[rgba(150,173,233,0.2)] rounded-xl focus:outline-none focus:border-[#6147FF] focus:ring-2 focus:ring-[rgba(97,71,255,0.1)] resize-y"
        />
      </Form.Item>
      <Form.Item>
        <AntdButton
          type="primary"
          htmlType="submit"
          className="w-full h-12 rounded-xl text-base font-semibold"
        >
          {t('保存')}
        </AntdButton>
      </Form.Item>
    </Form>
  );
}
