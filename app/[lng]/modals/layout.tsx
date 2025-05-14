'use client';
import ModalLists from './_components/modal_lists';

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
        <div className="h-full bg-gray-100">{children}</div>
      </div>
    </div>
  );
}
