'use client';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign out
    </button>
  );
}
