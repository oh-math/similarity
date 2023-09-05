import { db } from "@/lib/db";
import { config } from "@/lib/env-parse";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

const { GOOGLE_CLIENT_ID: clientId, GOOGLE_CLIENT_SECRET: clientSecret } =
  config;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
  callbacks: {
    session({ token, session }) {
      if (token) {
        session.user.id = token.sub;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.name = token.name;
      }

      return session;
    },

    async jwt({token, user}) {

    }
  },
};
