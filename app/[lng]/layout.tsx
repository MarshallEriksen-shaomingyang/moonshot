'use client';

import LeftSidePanel from './chat/_components/left-side';

export default function LngLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row overflow-hidden min-h-screen w-full">
      <div className="w-0 lg:w-[7%] invisible !bg-background  lg:visible">
        <LeftSidePanel />
      </div>
      {children}
    </div>
  );
}
