import { Layout } from 'antd';

export default function AntdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="w-full h-screen !bg-background  overflow-hidden">
        {children}
      </div>
    </Layout>
  );
}
