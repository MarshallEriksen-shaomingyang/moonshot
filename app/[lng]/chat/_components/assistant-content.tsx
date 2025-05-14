import type { CollapseProps } from 'antd';
import { Collapse, Typography, Popover, Space } from 'antd';
import AssistantCard from './assistant-card';
import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';

const { Title, Text } = Typography;

const ExtraSettings = () => {
  const content = (
    <Space.Compact direction="vertical">
      <AntdButton
        type="text"
        icon={<Icon iconClass="icon-create" svgClass="w-10 h-10" />}
      >
        <Text type="secondary">新建助手</Text>
      </AntdButton>
      <AntdButton
        type="text"
        icon={<Icon iconClass="icon-create" svgClass="w-10 h-10" />}
      >
        <Text type="secondary">创建分组</Text>
      </AntdButton>
      <AntdButton
        danger
        type="text"
        icon={<Icon iconClass="icon-delete" svgClass="w-10 h-10" />}
      >
        <Text type="danger">删除分组</Text>
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
      label: (
        <Title className="!text-foreground" level={5}>
          助手列表
        </Title>
      ),
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '2',
      label: (
        <Title className="!text-foreground" level={5}>
          Assistant 2
        </Title>
      ),
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '3',
      label: (
        <Title className="!text-foreground" level={5}>
          Assistant 3
        </Title>
      ),
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '4',
      label: (
        <Title className="!text-foreground" level={5}>
          Assistant 4
        </Title>
      ),
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
    {
      key: '5',
      label: (
        <Title className="!text-foreground" level={5}>
          Assistant 5
        </Title>
      ),
      children: <AssistantCard />,
      extra: ExtraSettings(),
    },
  ];

  return <Collapse ghost size="small" items={items} defaultActiveKey={['1']} />;
}
