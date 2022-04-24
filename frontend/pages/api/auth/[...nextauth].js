import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export default NextAuth({
    // Configure one or more authentication providers
    providers: [
            CredentialsProvider({
              // The name to display on the sign in form (e.g. 'Sign in with...')
              name: 'Credentials',
              credentials: {
                username: { label: "Username", type: "text"},
                password: {  label: "Password", type: "password" }
              },
              async authorize(credentials, req) {
                const res = await fetch("https://www.mecallapi.com/api/login", {
                  method: 'POST',
                  body: JSON.stringify(credentials),
                  headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
          
                // If no error and we have user data, return it
                if (data.status == 'ok') {
                  return data.user
                }
                // Return null if user data could not be retrieved
                return null
              }
            })
          ],
    secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {
            token.accessToken = account.access_token
            token.user = user
          }
          return token
        },
        async session({ session, token, user }) {
          // Send properties to the client, like an access_token from a provider.
          session.accessToken = token.accessToken
          session.user = token.user
          return session
        }
      }
  })