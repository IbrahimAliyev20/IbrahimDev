import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import Header from "../components/layout/header/Header"
import Footer from "../components/layout/footer/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "İbrahimDev - Frontend Developer",
  description:
    "Frontend Developer specializing in building clean, efficient, and high-performance web applications with modern technologies like React, Next.js, and TypeScript.",
  keywords: ["frontend developer", "react developer", "nextjs", "typescript", "ibrahim aliyev", "aliyevdev", "figma to code", "web developer baku"],
  authors: [{ name: "İbrahim Aliyev" }],
  openGraph: {
    title: "İbrahimDev - Frontend Developer Portfolio",
    description: "Transforming ideas into modern and efficient web applications.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

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
     
         <Footer />

        </ThemeProvider>
      </body>
    </html>
  )
}
