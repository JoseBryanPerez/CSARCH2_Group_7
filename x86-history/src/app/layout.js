import "./globals.css";

export const metadata = {
  title: "x86-history",
  description: "CSARCH2 Case Project #2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
