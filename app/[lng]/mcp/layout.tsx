import { Layout } from 'antd';

import 'github-markdown-css/github-markdown.css';

export default function MCPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="w-full h-screen bg-background overflow-hidden ">
        {children}
      </div>
    </Layout>
  );
}
