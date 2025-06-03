'use client';
import { Typography } from 'antd';

import HeaderComponent from '@/components/header';

const { Title } = Typography;
export default function ProviderHead() {
  return (
    <HeaderComponent>
      <Title level={4} className="!mb-0 select-none">
        创建模型
      </Title>
    </HeaderComponent>
  );
}
