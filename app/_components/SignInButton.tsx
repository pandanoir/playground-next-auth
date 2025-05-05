'use client';
import { signIn } from 'next-auth/react';

export function SignInButton() {
  return (
    <button type="button" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
