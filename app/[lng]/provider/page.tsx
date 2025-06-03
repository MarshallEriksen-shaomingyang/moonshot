import ProviderHead from './_components/provider_head';
import ProviderTabs from './_components/provider_tabs';

export default function Page() {
  return (
    <div className="flex flex-col">
      <ProviderHead />
      <ProviderTabs />
    </div>
  );
}
