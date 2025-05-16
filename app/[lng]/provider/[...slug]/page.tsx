import ProviderHead from './_components/provider-head';
import ProviderDetail from './_components/provider-detail';
import ModalTable from './_components/modal-table';
import HeaderComponent from '@/components/header';

export default function Page() {
  return (
    <div className="h-full flex flex-col gap-4">
      <HeaderComponent>
        <div>hello world</div>
      </HeaderComponent>
      <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
        <ProviderHead />
        <div className="flex flex-col px-4">
          <ProviderDetail />
          <div className="mt-6">
            <ModalTable />
          </div>
        </div>
      </div>
    </div>
  );
}
