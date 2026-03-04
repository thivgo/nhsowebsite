import type {Metadata} from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: "NHSO Sheriff - Legacy System",
  description: "NHSO Connect v4.2",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className={`${vt323.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen flex flex-col selection:bg-[#000080] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
