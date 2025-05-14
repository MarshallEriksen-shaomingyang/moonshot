'use client';
import { Layout } from 'antd';

import HeaderContent from './_components/header';

const { Header, Content } = Layout;
export default function CommunicateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className="flex flex-row overflow-hidden min-h-screen w-full">
      <Header className="!bg-background rounded-md !px-6 !shadow-md">
        <HeaderContent />
      </Header>
      <Content className="h-[calc(100vh-var(--ant-layout-header-height))]">
        {children}
      </Content>
    </Layout>
  );
}
