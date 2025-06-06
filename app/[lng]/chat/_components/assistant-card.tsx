import { Card, Avatar, ConfigProvider, Tag, Typography } from 'antd';

import { useT } from '@/app/i18n/client';
import AntdButton from '@/components/antd-button';

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
  description = 'This is the descriptionThis is the descriptionThis is the descriptionThis is the description',
  ...props
}: IProps) {
  const { t } = useT('chat');
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
      <Card className="cursor-pointer relative !shadow-none group" {...props}>
        <div className="flex flex-col gap-2 w-full overflow-hidden p-2 h-65 justify-between">
          <div className="group-hover:animate-pulse relative bg-gradient-to-r from-purple-500 to-pink-500 h-18 rounded-lg shadow-lg">
            <Avatar
              src={avatar}
              size={52}
              className="!bg-background absolute left-[75%] top-[70%]"
            />
          </div>
          <div className="flex flex-col gap-5 mt-4">
            <Typography.Title level={4} className="!text-base !mb-0">
              {title}
            </Typography.Title>

            <Typography.Paragraph
              type="secondary"
              className="!mb-0"
              ellipsis={{ rows: 3 }}
            >
              {description}
            </Typography.Paragraph>
          </div>

          <div className="flex gap-3 justify-between items-center">
            <Tag className="!tracking-wide">编程</Tag>
            <AntdButton type="primary" secondary size="small">
              {t('开始会话')}
            </AntdButton>
          </div>
        </div>
      </Card>
    </ConfigProvider>
  );
}
