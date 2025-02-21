import './globals.css';
import { theme } from '@/lib/theme-provider';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '500'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Clima tempo',
  description: 'Previsão do tempo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${montserrat.variable}`}>
      <body>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
