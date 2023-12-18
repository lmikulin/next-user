import { getServerSession } from 'next-auth';
import { WelcomePage, LandingPage } from './components/home';

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    return <LandingPage />
  }

  return <WelcomePage user={session?.user?.name || ''} />
}
