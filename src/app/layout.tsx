import { CssBaseline } from "@mui/material";
import Providers from "@/utils/provider";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
