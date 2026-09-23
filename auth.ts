import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const SUPER_ADMIN_EMAIL = "obedpurba21@gmail.com";
const SUPER_ADMIN_PASSWORD = "obed12";

const googleProvider = process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
  ? GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  : null;

export const authOptions = {
  trustHost: true,
  secret: process.env.AUTH_SECRET ?? process.env.NEXTAUTH_SECRET ?? "xeltrha-studio-dev-secret",
  pages: {
    signIn: "/admin/login",
  },
  providers: [
    ...(googleProvider ? [googleProvider] : []),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase();
        const password = credentials?.password;

        if (email === SUPER_ADMIN_EMAIL && password === SUPER_ADMIN_PASSWORD) {
          return {
            id: "super-admin",
            name: "Super Admin",
            email,
            image: null,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
      if (session?.user) {
        session.user.name = session.user.name ?? "Admin";
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
