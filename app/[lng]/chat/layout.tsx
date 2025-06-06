import { Layout, Splitter } from 'antd';

import HeaderContent from './_components/header';

export default function CommunicateLayout({
  children,
  drawer,
}: Readonly<{
  children: React.ReactNode;
  drawer: React.ReactNode;
}>) {
  return (
    <>
      {drawer}
      <Splitter>
        <Splitter.Panel collapsible>
          <Layout className="flex flex-row overflow-hidden h-full w-full">
            <HeaderContent />
            <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
              {children}
            </div>
          </Layout>
        </Splitter.Panel>
      </Splitter>
    </>
  );
}
