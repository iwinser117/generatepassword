import "./globals.css";

export const metadata = {
  title: "Generator Password",
  description: "generador de contraseñas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
