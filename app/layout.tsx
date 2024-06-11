// добавление глобального стиля
import '@/app/ui/global.css';
// добавление шрифта глобально!
import { inter } from './ui/fonts';
// для отслеживания метрик производительности приложения
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
