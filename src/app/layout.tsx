import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Roboto } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from '@/components/provider/theme-provider'
import { AuthProvider } from '@/components/provider/auth-provider'
import { Header } from '@/components/shared/header'
import '@/app/globals.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('session-token')

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider sesstionToken={sessionToken?.value}>
            <Header />
            {children}
            <Toaster position="bottom-right" />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
