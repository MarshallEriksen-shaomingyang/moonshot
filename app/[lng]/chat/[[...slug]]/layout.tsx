'use client';
import { Layout } from 'antd';

import HeaderContent from './_components/header';

const { Content } = Layout;
export default function CommunicateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout className="flex flex-row overflow-hidden min-h-screen w-full">
      <HeaderContent />
      <Content className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
        {children}
      </Content>
    </Layout>
  );
}
