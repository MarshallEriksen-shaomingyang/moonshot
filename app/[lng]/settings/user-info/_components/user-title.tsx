'use client';
import { Typography } from 'antd';

import { useT } from '@/app/i18n/client';
const { Title } = Typography;
export default function UserTitle() {
  const { t } = useT('settings');
  return (
    <Title level={4} className="mb-8 select-none">
      {t('用户信息设置')}
    </Title>
  );
}
