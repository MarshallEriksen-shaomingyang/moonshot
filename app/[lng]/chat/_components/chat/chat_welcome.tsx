'use client';
import { Welcome } from '@ant-design/x';
import Image from 'next/image';

import { useT } from '@/app/i18n/client';
import Party from '@/public/images/welcome.svg';

import ChatPrompts from './chat_prompts';

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
      <div className="flex flex-col justify-start mt-8">
        <ChatPrompts />
      </div>
    </div>
  );
}
