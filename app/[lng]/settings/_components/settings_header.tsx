'use client';
import { Typography } from 'antd';

import { useT } from '@/app/i18n/client';
import HeaderComponent from '@/components/header';

export default function SettingsHeader() {
  const { t } = useT('settings');
  return (
    <HeaderComponent>
      <Typography.Title level={4} className="!mb-0 !tracking-wider select-none">
        {t('个人中心')}
      </Typography.Title>
    </HeaderComponent>
  );
}
