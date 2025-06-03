import ModalTable from './_components/modal-table';
import ProviderDetail from './_components/provider-detail';
import ProviderHead from './_components/provider-head';

export default function Page() {
  return (
    <div className="h-full flex flex-col gap-4">
      <ProviderHead />
      <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
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
