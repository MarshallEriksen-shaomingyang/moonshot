import HeaderComponent from '@/components/header';

import ProviderTabs from './_components/provider_tabs';

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeaderComponent>
        <div>hello world</div>
      </HeaderComponent>
      <ProviderTabs />
    </div>
  );
}
