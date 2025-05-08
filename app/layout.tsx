import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import OfflineSyncManager from "@/components/sync-manager"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quiz App",
  description: "Teste seus conhecimentos com nossos questionários interativos",
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
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-black text-white flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className="flex-grow pb-20">{children}</main>
          <Footer />
          <OfflineSyncManager />
        </ThemeProvider>
      </body>
    </html>
  )
}