import Link from 'next/link'

const sum = (a: number, b: number) => a * b;

export const result = sum('two', 'one');
 
export default function Page() {
  return <Link href="/dashboard">Dashboard page</Link>
}
