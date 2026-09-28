import { ThemeProvider } from './providers';
import './globals.css';

export const metadata = {
  title: 'Jaswanth Srighakollapu — Cybersecurity Explorer & Developer',
  description:
    'Portfolio of N V K Jaswanth Srighakollapu — Cybersecurity Enthusiast, Full Stack Developer, and UI/UX Designer. Building secure, efficient, and beautiful digital experiences.',
  keywords: [
    'Jaswanth Srighakollapu',
    'Portfolio',
    'Cybersecurity',
    'Full Stack Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Jaswanth Srighakollapu' }],
  openGraph: {
    title: 'Jaswanth Srighakollapu — Portfolio',
    description: 'Cybersecurity Explorer • Full Stack Developer • UI/UX Designer',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="font-sans noise-bg">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
