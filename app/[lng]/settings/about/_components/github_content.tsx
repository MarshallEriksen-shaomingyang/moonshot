'use client';
import { Typography } from 'antd';

import { useT } from '@/app/i18n/client';
export default function GithubContent() {
  const { t } = useT('settings');
  return (
    <div className="flex flex-col gap-3">
      <Typography.Title level={3}>{t('关于我们')}</Typography.Title>
    </div>
  );
}
