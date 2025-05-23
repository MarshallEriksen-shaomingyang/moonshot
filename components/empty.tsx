'use client';
import { Empty, Typography } from 'antd';

import { useT } from '@/app/i18n/client';
import Icon from '@/components/icon';
export default function EmptyComponent() {
  const { t } = useT('common');
  return (
    <Empty
      image={<Icon iconClass="icon-cangshu" svgClass="w-10 h-10" />}
      description={
        <Typography.Text type="secondary">
          {t('search.noResults')}
        </Typography.Text>
      }
    />
  );
}
