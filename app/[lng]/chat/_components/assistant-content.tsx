import type { CollapseProps } from 'antd';
import { Collapse, Typography, Popover, Space } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

import AssistantCard from './assistant-card';

const { Title } = Typography;

const ExtraSettings = () => {
  const content = (
    <Space.Compact direction="vertical">
      <AntdButton
        type="text"
        icon={<Icon iconClass="icon-create" svgClass="w-8 h-8" />}
      >
        新建助手
      </AntdButton>
      <AntdButton
        type="text"
        icon={<Icon iconClass="icon-create" svgClass="w-8 h-8" />}
      >
        创建分组
      </AntdButton>
      <AntdButton
        danger
        type="text"
        icon={<Icon iconClass="icon-delete1" svgClass="w-8 h-8" />}
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
        icon={<Icon iconClass="icon-ellipsis" svgClass="w-10 h-10" />}
      />
    </Popover>
  );
};

export default function AssistantContent() {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <Title level={5}>助手列表</Title>,
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '2',
      label: <Title level={5}>Assistant 2</Title>,
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '3',
      label: <Title level={5}>Assistant 3</Title>,
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '4',
      label: <Title level={5}>Assistant 4</Title>,
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '5',
      label: <Title level={5}>Assistant 5</Title>,
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
  ];

  return <Collapse ghost size="small" items={items} defaultActiveKey={['1']} />;
}
