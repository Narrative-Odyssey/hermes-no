import NextAuth from "next-auth";

import Discord from "@auth/core/providers/discord";

export const {handlers, signIn, signOut, auth} = NextAuth({
    trustHost: true,
    providers: [Discord({authorization: {params: {scope: "identity"}}})],
});
