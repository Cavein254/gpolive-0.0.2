import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client/edge";
import { AuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const prisma = new PrismaClient()

export  const authOptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })
    ],
    callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
            return true
          },
        async redirect({ url, baseUrl }) {
            const newUrl = baseUrl + '/signup';
            return newUrl
          },
        async session({ session, user, token }) {
            return session
          },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token
        },
    }
}
