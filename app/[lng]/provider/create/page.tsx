import ScrollContent from '@/components/scroll-content';

import ProviderForm from './_components/provider-form';
import ProviderHead from './_components/provider-head';

export default function Page() {
  return (
    <div className="flex flex-col">
      <ProviderHead />
      <div className="h-[calc(100vh-var(--moonshot-layout-header-height))]">
        <ScrollContent>
          <div className="h-full flex justify-center items-center">
            <ProviderForm />
          </div>
        </ScrollContent>
      </div>
    </div>
  );
}
