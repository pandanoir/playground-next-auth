import { auth } from '../auth/[...nextauth]/route';

export async function GET() {
  const session = await auth();
  if (!session) {
    return new Response(
      'You must be signed in to view the protected content on this page.',
      {
        status: 403,
      },
    );
  }
  return new Response(
    `This is protected content. You can access this content because you are signed in. ${session.user?.email}`,
  );
}
