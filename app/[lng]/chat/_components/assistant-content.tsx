import type { CSSProperties } from 'react';

import type { CollapseProps } from 'antd';
import { Collapse, Typography, Popover, Space } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

import AssistantCard from './assistant-card';

const { Title } = Typography;

const ExtraSettings = ({ isDefault }: { isDefault: boolean }) => {
  const content = (
    <Space.Compact direction="vertical">
      <AntdButton
        type="text"
        color="cyan"
        icon={<Icon iconClass="icon-edit" svgClass="w-4 h-4" />}
      >
        创建助手
      </AntdButton>
      {isDefault && (
        <AntdButton
          type="text"
          icon={<Icon iconClass="icon-edit" svgClass="w-4 h-4" />}
        >
          创建分组
        </AntdButton>
      )}
      <AntdButton
        danger
        type="text"
        icon={<Icon iconClass="icon-delete1" svgClass="w-4 h-4" />}
      >
        删除分组
      </AntdButton>
    </Space.Compact>
  );
  return (
    <Popover
      content={content}
      trigger="click"
      placement="bottomLeft"
      arrow={true}
    >
      <AntdButton
        size="small"
        shape="circle"
        type="text"
        onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        icon={<Icon iconClass="icon-ellipsis" svgClass="w-10 h-10" />}
      />
    </Popover>
  );
};

export default function AssistantContent() {
  const getItems: (
    panelStyle: CSSProperties
  ) => CollapseProps['items'] = panelStyle => [
    {
      key: '1',
      label: <Title level={5}>默认助手</Title>,
      children: <AssistantCard title="默认助手" />,
      extra: ExtraSettings({ isDefault: true }),
      showArrow: false,
      style: panelStyle,
    },
    {
      key: '2',
      label: <Title level={5}>Assistant 2</Title>,
      children: <AssistantCard />,
      showArrow: false,
      style: panelStyle,
      extra: ExtraSettings({ isDefault: false }),
    },
    {
      key: '3',
      label: <Title level={5}>Assistant 3</Title>,
      children: <AssistantCard />,
      showArrow: false,
      style: panelStyle,
      extra: ExtraSettings({ isDefault: false }),
    },
  ];

  const panelStyle: React.CSSProperties = {
    paddingBlock: 0,
    padding: 0,
    border: 'none',
  };

  return (
    <Collapse
      ghost
      bordered={false}
      size="small"
      items={getItems(panelStyle)}
      defaultActiveKey={['1']}
    />
  );
}
