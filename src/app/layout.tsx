import { Inter } from 'next/font/google';

import { siteConfig } from '@/config/site';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}` // Hoge | Taskify という形で表示される。
  },
  description: siteConfig.description,
  icons: [
    {
      href: '/logo.svg',
      url: '/logo.svg'
    }
  ]
};

// NOTE: RootLayoutの設定のため無視。
// eslint-disable-next-line react/function-component-definition
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
