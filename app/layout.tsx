import '@ant-design/v5-patch-for-react-19';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import { getT } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';
import './globals.css';

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export async function generateMetadata() {
  const { t } = await getT();
  return {
    title: t('title'),
    content: t('description'),
    csp: "default-src 'self'; script-src 'self' 'unsafe-inline';",
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

const notoSansSC = localFont({
  src: [
    {
      path: '../public/fonts/NotoSansSC-Subset-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NotoSansSC-Subset-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/NotoSansSC-Subset-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-noto-sans-sc',
});

const getFontFamilyByLang = (lng: string) => {
  if (lng === 'zh') {
    return `${notoSansSC.style.fontFamily}, ${geistSans.style.fontFamily}, sans-serif`;
  }
  return `${geistSans.style.fontFamily}, sans-serif`;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const { lng } = await params;
  return (
    <html lang={lng} dir="ltr" data-theme="light">
      <head>
        <script
          defer={true}
          src={'//at.alicdn.com/t/c/font_4917653_qitxfgjw9xp.js'}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider
            direction="ltr"
            prefixCls="moonshot"
            theme={{
              cssVar: true,
              token: {
                fontFamily: getFontFamilyByLang(lng),
                fontFamilyCode: `${geistMono.style.fontFamily}, monospace`,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
