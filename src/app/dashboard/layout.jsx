import { Inter } from "next/font/google";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Management Portal",
  description: "Bookme Restaurant Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Sidebar/>
    </html>
  );
}
