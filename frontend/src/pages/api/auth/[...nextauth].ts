import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const user = await axios
                    .post(
                        `http://localhost:3000/authentication/login`,
                        {
                            email: credentials.email,
                            password: credentials.password,
                        }
                    )
                    .then((res: { data: any }) => {
                        return res.data
                    })
                    .catch((err: Error) => {
                        return null
                    })
                return user
            },
        }),
        // ...add more providers here
    ],
    secret: 'secret',
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.accessToken = user.access_token
                token.user = user.data
            }
            return token
        },
        async session({ session, token }: any) {
            session.user = token.user
            session.accessToken = token.accessToken
            session.error = token.error

            return session
        },
    },
})