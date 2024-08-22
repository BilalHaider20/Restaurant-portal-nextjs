
import { Inter } from "next/font/google";
import "../styles/globals.css";
import StoreProvider from '../StoreProvider';
import {NextIntlClientProvider} from 'next-intl';
import PrelineScript from '../components/PrelineScript'
import {getMessages} from 'next-intl/server';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Management System",
  description: "Bookme Restaurant Portal",
};

export default  async function RootLayout({ children ,locale }) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={` ${inter.className}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
      <PrelineScript />
    </html>
  );
}


