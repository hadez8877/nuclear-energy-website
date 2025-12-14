import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Energía Nuclear | El Futuro de la Energía Limpia",
  description:
    "Descubre cómo la energía nuclear está transformando el panorama energético mundial. Aprende sobre fisión nuclear, ventajas, desventajas y su papel crucial en la transición hacia un futuro sostenible.",
  keywords: [
    "energía nuclear",
    "fisión nuclear",
    "energía limpia",
    "sostenibilidad",
    "reactores nucleares",
    "futuro energético",
    "cambio climático",
    "energía base",
  ],
  authors: [{ name: "Nuclear Energy Initiative" }],
  openGraph: {
    title: "Energía Nuclear | El Futuro de la Energía Limpia",
    description: "Descubre cómo la energía nuclear está transformando el panorama energético mundial.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energía Nuclear | El Futuro de la Energía Limpia",
    description: "Descubre cómo la energía nuclear está transformando el panorama energético mundial.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
