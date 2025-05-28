import { Splitter } from 'antd';
import dynamic from 'next/dynamic';

import AssistantSider from './_components/assistant-sider';

const AssistantEdit = dynamic(() => import('./_components/assistant-edit'));

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AssistantEdit />
      <Splitter>
        <Splitter.Panel
          defaultSize="20%"
          collapsible
          min={'15%'}
          max={'25%'}
          className="invisible !bg-background md:visible"
        >
          <AssistantSider />
        </Splitter.Panel>
        <Splitter.Panel collapsible>{children}</Splitter.Panel>
      </Splitter>
    </>
  );
}
