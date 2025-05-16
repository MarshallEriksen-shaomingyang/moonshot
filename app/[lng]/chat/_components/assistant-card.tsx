import { Card, Avatar, ConfigProvider } from 'antd';
import Icon from '@/components/icon';
import AntdButton from '@/components/antd-button';

const { Meta } = Card;

interface IProps {
  className?: string;
  avatar?: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

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
            bodyPadding: 12,
            colorTextHeading: 'var(--foreground) !important',
          },
        },
      }}
    >
      <Card
        variant="borderless"
        className="cursor-pointer relative"
        hoverable
        {...props}
      >
        <Meta
          avatar={<Avatar src={avatar} />}
          title={title}
          description={description}
        />
        <AntdButton
          className="!absolute right-2 top-[50%] translate-y-[-50%]"
          type="primary"
          secondary
          size="small"
          shape="circle"
          variant="outlined"
          icon={<Icon iconClass="icon-ellipsis-v" svgClass="w-10 h-10" />}
        />
      </Card>
    </ConfigProvider>
  );
}
