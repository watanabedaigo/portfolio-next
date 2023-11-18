export async function generateStaticParams() {
  const works = [
    {
      id: '1',
      name: 'test1',
    },
    {
      id: '2',
      name: 'test2',
    },
    {
      id: '3',
      name: 'test3',
    },
  ];

  return works.map((work) => ({
    id: work.id,
  }));
}

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <h1>works/{id}/page</h1>
    </div>
  );
}
