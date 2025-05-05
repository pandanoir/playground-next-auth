'use client';
import { signIn } from 'next-auth/react';

export function ProviderSignInButton({
  id,
  name,
}: { id: string; name: string }) {
  if (id === 'email') {
    return (
      <form
        action={async (data) => {
          signIn(id, { email: data.get('email') });
        }}
      >
        <input type="email" name="email" />
        <button type="submit">Sign in with {name}</button>
      </form>
    );
  }
  return (
    <button type="button" onClick={() => signIn(id)}>
      Sign in with {name}
    </button>
  );
}
