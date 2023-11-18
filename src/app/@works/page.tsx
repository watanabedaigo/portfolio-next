import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>@works/page</h1>
      <ul>
        <li>
          <Link href="/works/1">to /works/1</Link>
        </li>
        <li>
          <Link href="/works/2">to /works/2</Link>
        </li>
        <li>
          <Link href="/works/3">to /works/3</Link>
        </li>
      </ul>
    </div>
  );
}
