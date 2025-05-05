import { getProviders } from 'next-auth/react';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { ProviderSignInButton } from './ProviderSignInButton';
import { redirect } from 'next/navigation';

export default async function SignIn({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const session = await auth();

  if (session) {
    const callbackUrl = (await searchParams).callbackUrl;
    redirect(
      Array.isArray(callbackUrl) ? callbackUrl[0] : (callbackUrl ?? '/'),
    );
  }

  const providers = (await getProviders()) ?? [];

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <ProviderSignInButton id={provider.id} name={provider.name} />
        </div>
      ))}
    </>
  );
}
