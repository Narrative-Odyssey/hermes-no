import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID || "",
            clientSecret: process.env.DISCORD_CLIENT_SECRET || "",
            authorization: {params: {scope: "identify"}}
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user ??= {};
            // @ts-ignore
            session.user.id = token.sub;
            return session;
        },
    }
});
