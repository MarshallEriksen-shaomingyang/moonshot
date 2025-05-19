import { Layout } from 'antd';

import LeftSide from './_components/left_side';
import MCPHeader from './_components/mcp_header';
import 'github-markdown-css/github-markdown.css';

export default function MCPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="w-full h-screen bg-background overflow-hidden grid grid-cols-4">
        <div className="col-span-1 p-4">
          <LeftSide />
        </div>
        <div className="col-span-3 flex flex-col">
          <MCPHeader />
          <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
}
