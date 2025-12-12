import "./globals.css";

export const metadata = {
  title: "Generator Password",
  description: "generador de contraseñas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-white selection:bg-blue-600/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
