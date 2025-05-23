import AntdLayout from '@/components/antd-layout';

import SettingsSide from './_components/left-side';
import SettingsHeader from './_components/settings_header';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdLayout>
      <div className="flex flex-col h-full relative">
        <SettingsHeader />
        <div className="md:grid md:grid-cols-4 h-full">
          <div className="col-span-0 md:col-span-1">
            <SettingsSide />
          </div>
          <div className="md:col-span-3 h-[calc(100vh-var(--moonshot-layout-header-height))]">
            {children}
          </div>
        </div>
      </div>
    </AntdLayout>
  );
}
