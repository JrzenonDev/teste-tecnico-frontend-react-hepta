import { theme } from "@/lib/theme-provider";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clima tempo",
  description: "Previsão do tempo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
