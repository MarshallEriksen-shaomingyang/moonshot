import { Layout } from 'antd';
import ProviderHead from './_components/provider-head';
import ProviderDetail from './_components/provider-detail';
import ModalTable from './_components/modal-table';

export default function Page() {
  return (
    <Layout className="!bg-background">
      <div className="h-full flex flex-col gap-4">
        <ProviderHead />
        <div className="h-[calc(100vh-var(--moonshot-layout-header-height))] flex flex-col px-4">
          <ProviderDetail />
          <div className="mt-6">
            <ModalTable />
          </div>
        </div>
      </div>
    </Layout>
  );
}
