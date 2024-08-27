
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StoreProvider from '../StoreProvider';
import { NextIntlClientProvider } from 'next-intl';
import PrelineScript from '../components/PrelineScript'
import { getMessages } from 'next-intl/server';
// import {getLangDir} from 'rtl-detect';
import Providers  from '../../lib/providers'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Management System",
  description: "Bookme Restaurant Portal",
};

export default async function RootLayout({ children, params }) {
  const messages = await getMessages(params.locale);
  const direction = params.locale === "ar" ? "rtl" : "ltr";
  return (
    <html lang={params.locale} dir={direction} suppressHydrationWarning >
      <body className={` ${inter.className}`}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <StoreProvider>
            <Providers>
            {children}
            </Providers>
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
      <PrelineScript />
    </html>
  );
}


