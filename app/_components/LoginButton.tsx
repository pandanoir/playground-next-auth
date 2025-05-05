import { auth } from '../api/auth/[...nextauth]/route';
import { SignInButton } from './SignInButton';
import { SignOutButton } from './SignOutButton';

export async function LoginButton() {
  const session = await auth();
  if (session?.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <SignOutButton />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <SignInButton />
    </>
  );
}
