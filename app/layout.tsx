import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header/Header"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevPortfolio - Elite Front-End Developer",
  description:
    "Senior Front-End Developer & UI/UX Designer specializing in creating visually stunning, high-performance web experiences with modern technologies.",
  keywords: ["frontend developer", "react developer", "nextjs", "typescript", "ui/ux design"],
  authors: [{ name: "DevPortfolio" }],
  openGraph: {
    title: "DevPortfolio - Elite Front-End Developer",
    description: "Creating exceptional digital experiences with cutting-edge technology",
    type: "website",
  },
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Header />
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
