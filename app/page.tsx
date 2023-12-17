import { getServerSession } from 'next-auth';
import Link from 'next/link';
import JobTitle from './info/page';
import Logout from './logout';

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return (
      <>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </>
    )
  }

  return (
    <>
      <p>Welcome {session?.user?.name}</p>
      <Link href="/">Home</Link>
      <Logout />
      <JobTitle />
    </>
  )
}
