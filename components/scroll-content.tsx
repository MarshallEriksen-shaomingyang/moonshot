export default function ScrollContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="p-2 h-full overflow-x-hidden overflow-y-auto scroll-smooth scroll-hover-hide">
      {children}
    </div>
  );
}
