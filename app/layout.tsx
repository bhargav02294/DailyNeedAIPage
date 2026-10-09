import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';

export const metadata: Metadata = {
  title: 'DailyNeedAI — Secure information, intelligent action',
  description:
    'Secure documents, intelligent reminders and contextual AI in one modern personal information platform.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
