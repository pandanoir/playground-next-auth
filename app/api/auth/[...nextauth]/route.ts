import client from '@/app/_lib/db';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next';
import NextAuth, { type AuthOptions, getServerSession } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

const config: AuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  adapter: MongoDBAdapter(client), // email認証のverification tokenを保存するために使用
};
const handler = NextAuth(config);

export { handler as GET, handler as POST };

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}
