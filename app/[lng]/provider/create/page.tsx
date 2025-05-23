import HeaderComponent from '@/components/header';
import ScrollContent from '@/components/scroll-content';

import ProviderForm from './_components/provider_form';

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeaderComponent>
        <div>hello world</div>
      </HeaderComponent>
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
