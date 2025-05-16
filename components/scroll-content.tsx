export default function ScrollContent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full overflow-x-hidden overflow-y-auto scroll-smooth scroll-hover-hide">
      <div className="p-2">{children}</div>
    </div>
  );
}
