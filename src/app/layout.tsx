'use client';

import './globals.css';
import { theme } from '@/lib/theme-provider';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${montserrat.variable}`}>
      <head>
        <title>Clima Tempo</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
