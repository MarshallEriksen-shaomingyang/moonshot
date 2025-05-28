import { Card, Avatar, ConfigProvider, Space, Popover, Typography } from 'antd';

import AntdButton from '@/components/antd-button';
import Icon from '@/components/icon';

interface IProps {
  className?: string;
  avatar?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

const ExtraSettings = () => {
  return (
    <Space.Compact direction="vertical">
      <AntdButton
        type="text"
        icon={<Icon iconClass="icon-edit" svgClass="w-4 h-4" />}
      >
        编辑助手
      </AntdButton>
      <AntdButton
        danger
        type="text"
        icon={<Icon iconClass="icon-delete1" svgClass="w-4 h-4" />}
      >
        删除助手
      </AntdButton>
    </Space.Compact>
  );
};

export default function AssistantCard({
  avatar = 'https://api.dicebear.com/7.x/miniavs/svg?seed=8',
  title = 'Assistant',
  description = 'This is the description',
  ...props
}: IProps) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            bodyPadding: 5,
          },
        },
      }}
    >
      <div className="w-full">
        <Card
          variant="borderless"
          className="cursor-pointer relative !shadow-none hover:!bg-foreground/20"
          {...props}
        >
          <div className="flex items-center gap-2 w-full overflow-hidden">
            <Avatar src={avatar} size={46} />
            <div className="flex flex-col mt-2">
              <Typography.Title level={5} className="!text-base !mb-0">
                {title}
              </Typography.Title>
              <Typography.Paragraph
                type="secondary"
                className="!mb-0"
                ellipsis={{ rows: 1 }}
              >
                {description}
              </Typography.Paragraph>
            </div>
          </div>
          <Popover content={ExtraSettings} trigger="click" placement="right">
            <AntdButton
              className="!absolute right-2 top-[50%] translate-y-[-50%]"
              type="text"
              size="small"
              shape="circle"
              variant="outlined"
              icon={<Icon iconClass="icon-ellipsis-v" svgClass="w-10 h-10" />}
            />
          </Popover>
        </Card>
      </div>
    </ConfigProvider>
  );
}
