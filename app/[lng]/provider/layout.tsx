'use client';
import ModalLists from './_components/provider_lists';

export default function ModalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen bg-background overflow-hidden grid grid-cols-4">
      <div className="col-span-1">
        <ModalLists />
      </div>
      <div className="col-span-3">
        <div className="h-full p-2">{children}</div>
      </div>
    </div>
  );
}
