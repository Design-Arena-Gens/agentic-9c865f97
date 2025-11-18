import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Gato Elegante - Diseño',
  description: 'Ilustración de un gato alegre y elegante con un estilo limpio y sofisticado.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={playfair.variable}>
      <body>{children}</body>
    </html>
  );
}
