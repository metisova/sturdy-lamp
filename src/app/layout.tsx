import CssBaseline from '@mui/material/CssBaseline';

export const metadata = {
  title: "Sturdy Lamp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
