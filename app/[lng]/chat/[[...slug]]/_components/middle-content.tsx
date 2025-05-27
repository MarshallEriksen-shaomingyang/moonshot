'use client';
import { Splitter } from 'antd';
import dynamic from 'next/dynamic';

const SendText = dynamic(() => import('./chat/chat_input'), {
  ssr: false,
});
const ChatContent = dynamic(() => import('./chat/chat_content'), {
  ssr: false,
});
export default function MiddleContent() {
  return (
    <Splitter layout="vertical">
      <Splitter.Panel
        defaultSize="70%"
        min={'10%'}
        max={'100%'}
        className="!bg-background"
      >
        <ChatContent />
      </Splitter.Panel>
      <Splitter.Panel
        collapsible
        defaultSize={'30%'}
        max={'100%'}
        min={'10%'}
        className="!bg-background h-full"
      >
        <SendText />
      </Splitter.Panel>
    </Splitter>
  );
}
