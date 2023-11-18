import '@/app/globals.css';

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="works">
      <p>@works/layout</p>
      <div className="contents">{children}</div>
    </section>
  );
}
