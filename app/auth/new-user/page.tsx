import { auth } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function NewUser() {
  const session = await auth();

  if (session) {
    return <div>new user {session.user?.email}</div>;
  }

  redirect('/');
}
