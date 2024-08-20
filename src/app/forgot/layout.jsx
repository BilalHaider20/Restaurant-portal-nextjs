import "../styles/globals.css"
export const metadata = {
  title: "Restaurant Management Portal",
  description: "Bookme Restaurant Portal",
};

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
