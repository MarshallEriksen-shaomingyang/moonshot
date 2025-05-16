import { Layout } from 'antd';

import ModalLists from './_components/provider_lists';

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Layout>
      <div className="w-full h-screen bg-background overflow-hidden lg:grid lg:grid-cols-4">
        <div className="lg:col-span-1">
          <ModalLists />
        </div>
        <div className="lg:col-span-3">{children}</div>
      </div>
    </Layout>
  );
}
