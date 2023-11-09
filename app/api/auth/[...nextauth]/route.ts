import { db } from "@/lib/db";
import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          return null;
        }

        // const userPassword = user.password.replace("bcrypt_sha256$", "");
        const isPasswordValid = await compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isPasswordValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  // pages: {
  //   signIn: "/sign-in",
  // },
  callbacks: {
    session: ({ session, token }) => {
      //   console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      //   console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
