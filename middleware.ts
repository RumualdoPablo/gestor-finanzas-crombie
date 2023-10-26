// import { withAuth } from 'next-auth/middleware'

// export default withAuth({
//     pages: {
//         signIn: '/dashboard',
//     }
// })

// export const config = {
//     matcher: [
//         "/dashboard"
//     ]
// }

import createMiddleware from "next-intl/middleware"

export default createMiddleware({
    locales: ["en", "es"],
    defaultLocale: "es"
});

export const config = {
    // Ignora las rutas que no deben ser traducidas.
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};