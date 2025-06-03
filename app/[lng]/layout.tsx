import { zhCN, enUS } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

import GlobalModalProvider from '@/provider/modal-provider';

import LeftSidePanel from './_components/left-side';

const AuthModal = dynamic(() => import('./_components/auth-modal'));

const getFontFamilyByLang = (lng: string) => {
  if (lng === 'zh') {
    return zhCN;
  }
  return enUS;
};
export default async function LngLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  return (
    <GlobalModalProvider>
      <ClerkProvider localization={getFontFamilyByLang(lng)}>
        <AuthModal />
        <div className="flex overflow-hidden min-h-screen w-full justify-center md:flex-row">
          <div className="w-0 md:w-[7%] lg:w-[7%] invisible !bg-background  lg:visible">
            <LeftSidePanel />
          </div>
          <div className="w-[100%] md:w-[93%]">{children}</div>
        </div>
      </ClerkProvider>
    </GlobalModalProvider>
  );
}
