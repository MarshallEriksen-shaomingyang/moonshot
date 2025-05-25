import { Layout } from 'antd';

import 'github-markdown-css/github-markdown.css';
import MCPDrawerContent from './_components/mcp-drawer-content';

export default function MCPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <MCPDrawerContent />
      <div className="w-full h-screen bg-background overflow-hidden ">
        {children}
      </div>
    </Layout>
  );
}
