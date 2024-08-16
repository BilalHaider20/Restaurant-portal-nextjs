import { Inter } from "next/font/google";
import Sidebar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Management Portal",
  description: "Bookme Restaurant Portal",
};

export default function RootLayout({ children }) {
  return (
    <div lang="en" className="flex">
      <Sidebar/>
      <main className={inter.className} style={{flex:1}}>{children}</main>
    </div>
  );
}
