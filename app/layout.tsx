import '@ant-design/v5-patch-for-react-19';

import { Geist, Geist_Mono } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
// import { dir } from 'i18next';
import { languages } from '@/app/i18n/settings';
import { getT } from '@/app/i18n';

import './globals.css';

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export async function generateMetadata() {
  const { t } = await getT();
  return {
    title: t('title'),
    content: t('description'),
  };
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  return (
    <html lang={lng} dir="ltr" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          defer={true}
          src={'//at.alicdn.com/t/c/font_4917653_okp9ngseu9.js'}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider direction="ltr" theme={{ cssVar: true }}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
