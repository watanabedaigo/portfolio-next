import '@/app/globals.css';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>works/layout</p>
      {children}
    </div>
  );
}
