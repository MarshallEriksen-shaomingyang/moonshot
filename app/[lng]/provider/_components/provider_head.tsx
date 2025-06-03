'use client';
import { Typography } from 'antd';

import { useT } from '@/app/i18n/client';
import HeaderComponent from '@/components/header';

export default function ProviderHead() {
  const { t } = useT('provider');
  return (
    <HeaderComponent>
      <Typography.Title level={4} className="!mb-0 tracking-wide">
        {t('模型提供商')}
      </Typography.Title>
    </HeaderComponent>
  );
}
