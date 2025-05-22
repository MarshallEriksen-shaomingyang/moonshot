'use client';
import { memo } from 'react';

import { Typography } from 'antd';

import IconButton from '@/components/antd-button';
import HeaderComponent from '@/components/header';
import Icon from '@/components/icon';

const { Title } = Typography;

interface MCPHeaderProps {
  handleModal: () => void;
}

const MCPHeader = ({ handleModal }: MCPHeaderProps) => {
  return (
    <HeaderComponent>
      <div className="w-full flex gap-4 items-center">
        <Title level={4} className="!mb-0 select-none">
          我的MCP工具
        </Title>
        <IconButton
          size="small"
          color="cyan"
          variant="filled"
          icon={<Icon iconClass="icon-edit" svgClass="w-5 h-5" />}
          onClick={handleModal}
        >
          创建新工具
        </IconButton>
      </div>
    </HeaderComponent>
  );
};
export default memo(MCPHeader);
