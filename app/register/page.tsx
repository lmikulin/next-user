import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import RegisterForm from './form';

export default async function RegisterUser() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }

  return (
    <RegisterForm />
  )
};