import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans';
import 'katex/dist/katex.min.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Metadata, Viewport } from "next";
import { Inter, Syne } from 'next/font/google';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Toaster } from "sonner";
import "./globals.css";
import { Providers } from './providers';
import { ThemeProvider } from './theme-provider';

// Load Inter font for better readability
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kewi.ac.ke"),
  title: "KEWI AI Assistant",
  description: "Ask anything about academics, fees, or student life at Kenya Water Institute (KEWI). Your intelligent campus assistant.",
  openGraph: {
    url: "https://kewi.ac.ke",
    siteName: "Kenya Water Institute",
  },
  keywords: [
    "KEWI",
    "Kenya Water Institute",
    "KEWI AI",
    "KEWI Assistant",
    "Kenya Water Institute AI",
    "academic information",
    "student portal",
    "fee structure",
    "campus life",
    "higher education Kenya",
    "technical training",
    "water and sanitation training",
    "KEWI courses",
    "Kenya Water Institute courses",
    "KEWI admission",
    "KEWI student portal"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' }  /* KEWI dark blue */
  ],
}

const syne = Syne({ 
  subsets: ['latin'], 
  variable: '--font-syne',
   preload: true,
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${GeistSans.className}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <Providers>
              {children}
              <Toaster 
                position="top-center" 
                richColors
                toastOptions={{
                  className: 'font-sans',
                }}
              />
              <Analytics />
              <SpeedInsights />
            </Providers>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
