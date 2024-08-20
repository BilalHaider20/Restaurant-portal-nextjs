import { Inter } from "next/font/google";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/Sidebar";
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Management Portal",
  description: "Bookme Restaurant Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      {/* <Sidebar /> */}
      <main className={inter.className} style={{flex:1}}>{children}</main>
      </body>
    </html>
  );
}
