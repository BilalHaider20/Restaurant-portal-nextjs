import "../styles/globals.css";
// import navbar from "./navbar"

export const metadata = {
  title: "Forgot Password",
  description: "Bookme Restaurant Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
