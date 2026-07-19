import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Karunya Sugalaya — Diabetes Care & Research Centre, Kumbakonam',
  description: "Kumbakonam's specialist diabetes centre since 2008. 50,000+ patients, AI-assisted diagnosis, CMC Vellore certified lab. Expert care by Dr. K. Sivakumar. Book online.",
  icons: {
    icon: '/assets/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Asynchronously load Material Symbols to eliminate 1,330ms render-blocking request */}
        <link
          id="material-symbols"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
          media="print"
          suppressHydrationWarning
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var l=document.getElementById('material-symbols');if(l){l.media='all';}`,
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body className={`${inter.className} bg-background text-on-background font-body-md antialiased overflow-x-hidden`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContactButtons />
      </body>
    </html>
  );
}
