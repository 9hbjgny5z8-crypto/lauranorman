import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import TrackingScripts from "@/components/TrackingScripts"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Laura Norman | Orlando Real Estate Expert",
  description: "Your trusted real estate partner in Orlando, FL. Get expert home valuations and find your dream property with personalized service from Laura Norman.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <TrackingScripts />
        {children}
      </body>
    </html>
  )
}
