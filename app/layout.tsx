import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz App",
  description: "Test your knowledge with our interactive quizzes",
  generator: 'v0.dev',
  icons: {
    icon: "/favicon.ico",
  },  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
