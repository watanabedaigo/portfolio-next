import type { Metadata } from 'next';
import '@/app/globals.css';
import Container from '@/components/atom/Container';

export const metadata: Metadata = {
  title: 'Root',
  description: 'Root',
};

export default function RootLayout({
  children,
  fv,
  about,
  skill,
  works,
  contact,
}: {
  children: React.ReactNode;
  fv: React.ReactNode;
  about: React.ReactNode;
  skill: React.ReactNode;
  works: React.ReactNode;
  contact: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <p>app/layout</p>
        <div>
          <p>children</p>
          {children}
          <Container>
            {fv}
            {about}
            {skill}
            {works}
            {contact}
          </Container>
        </div>
      </body>
    </html>
  );
}
