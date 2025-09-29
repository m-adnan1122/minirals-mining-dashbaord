import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  cz-shortcut-listen="true"  style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
