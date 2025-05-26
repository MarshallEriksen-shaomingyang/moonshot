'use client';
import { Welcome, Bubble } from '@ant-design/x';
import { Typography, Space } from 'antd';
import Image from 'next/image';

import { useT } from '@/app/i18n/client';
import Party from '@/public/images/welcome.svg';

export default function WelcomeView() {
  /**
   * @description 聊天页面欢迎组件
   */
  const { t } = useT('chat');
  return (
    <div className="flex flex-col h-full p-2 ">
      <div className="flex justify-center items-between mb-2">
        <Welcome
          className="!bg-background"
          variant="borderless"
          icon={<Image src={Party} alt="welcome" loading="lazy" />}
          title={t('welcome.title')}
          description={t('welcome.description')}
        />
      </div>
      <div className="flex flex-col justify-start mt-2 gap-2">
        <Typography.Text className="!text-foreground !tracking-wide">
          {t('我可以帮您：')}
        </Typography.Text>
        <Space direction="vertical">
          <Bubble
            content="日本女教师优秀作品番号"
            className="cursor-pointer select-none "
            variant="outlined"
          />
          <Bubble
            content="人妻的不伦温泉之旅"
            className="cursor-pointer select-none"
            variant="outlined"
          />
          <Bubble
            content="张哥一宿三次的秘密"
            className="cursor-pointer select-none"
            variant="outlined"
          />
        </Space>
      </div>
    </div>
  );
}
