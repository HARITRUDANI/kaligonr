
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/navbar/navbar'
import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({
  src: [
    {
      path: './ARIAL.woff',
      style: 'normal',
    },
    {
      path: './Poppins-Regular.ttf',
      style: 'normal',
    },
    {
      path: './ppeiko-medium.otf',
      style: 'normal',
    },
  ]})

export const metadata: Metadata = {
  title: 'Kaligon',
  description: 'kaligon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      
      <body> <Navbar/> {children}</body>
      
    </html>
  )
}
