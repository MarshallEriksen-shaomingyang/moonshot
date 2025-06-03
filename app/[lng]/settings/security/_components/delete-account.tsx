'use client';
import { Typography } from 'antd';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

const { Title } = Typography;

export default function DeleteAccount() {
  const { t } = useT('security');
  return (
    <div className="flex flex-col gap-3">
      <Title level={4} className="mb-8 select-none">
        {t('删除账户')}
      </Title>
      <Title level={5} className="select-none">
        {t('删除您的帐户和所有源数据。这是不可逆转的.')}
      </Title>
      <AntdButton danger className="w-32">
        {t('删除账户')}
      </AntdButton>
    </div>
  );
}
