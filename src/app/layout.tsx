import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-heading',
  weight: ['500', '600', '700', '800']
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Karunya Sugalaya — Diabetes Care & Research Centre, Kumbakonam',
  description: "Kumbakonam's specialist diabetes centre since 2008. 50,000+ patients, AI-assisted diagnosis, CMC Vellore certified lab. Expert care by Dr. K. Sivakumar. Book online.",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
