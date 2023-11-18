import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Works/id/',
  description: 'Works/id/',
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="works">
      <p>works/id/layout</p>
      <div className="contents">{children}</div>
    </section>
  );
}
