import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_ID,
            clientSecret: process.env.DISCORD_SECRET,
            authorization: {
                url: "https://discord.com/api/oauth2/authorize?response_type=code&prompt=none",
                params: {
                    scope: "guilds identify"
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        maxAge: 60 * 60 * 24 * 1, // 24 hours
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, account, profile, user }) {
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                delete token.name;
                token.username = profile.username;
                token.displayName = profile.global_name;
                delete token.picture;
                delete token.sub;
                token.avatarURL = profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar.replace("a_", "")}.${profile.avatar.startsWith("a_") ? "gif" : "png"}` : `https://cdn.discordapp.com/embed/avatars/${(profile.id >> 22) % 6}.png`;
                token.id = profile.id;
                token.language = profile.locale;
            }
            return token;
        },
        async session({ session, token }) {
            return token;
        }
    }
});