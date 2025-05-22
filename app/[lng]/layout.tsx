import LeftSidePanel from './_components/left-side';

export default function LngLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex overflow-hidden min-h-screen w-full justify-center md:flex-row">
      <div className="w-0 md:w-[7%] lg:w-[7%] invisible !bg-background  lg:visible">
        <LeftSidePanel />
      </div>
      <div className="w-[100%] md:w-[93%]">{children}</div>
    </div>
  );
}
