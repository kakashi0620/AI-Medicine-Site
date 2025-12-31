import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI HealthCare - Your AI Health Care Consultant',
  description: 'Talk with our AI doctor to understand symptoms and get treatment guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

