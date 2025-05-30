import { Switch, Space } from 'antd';

import AntdButton from '@/components/antd-button';

import ModalLogo from '../../_components/provider_logo';

export default function ProviderHead() {
  return (
    <div className="h-[var(--moonshot-layout-header-height)] flex justify-between items-center px-4 rounded-md">
      <ModalLogo name="Gemini" />
      <Space>
        <AntdButton type="primary" secondary size="small">
          编辑
        </AntdButton>
        <Switch />
      </Space>
    </div>
  );
}
