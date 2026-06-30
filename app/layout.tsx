import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://greenacresdelta.com'),
  title: {
    default: 'Green Acres Delta - Premium Plots & Villas in Mayiladuthurai',
    template: '%s | Green Acres Delta'
  },
  description: 'Green Acres Delta - DTCP approved plots & luxury villas in Mayiladuthurai. Best real estate investment opportunity in Delta region. Gated community, bank loan available.',
  keywords: [
    'Green Acres Delta',
    'plots in mayiladuthurai',
    'villas in delta region',
    'best place in mayiladuthurai',
    'real estate in mayiladuthurai',
    'DTCP approved plots',
    'real estate mayiladuthurai',
    'gated community plots tamil nadu',
    'investment plots delta'
  ],
  authors: [{ name: 'Green Acres Delta' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://greenacresdelta.com',
    title: 'Green Acres Delta - Premium Plots & Villas',
    description: 'DTCP approved plots & luxury villas in Mayiladuthurai. Gated community with all amenities. Book site visit now!',
    siteName: 'Green Acres Delta',
    images: [
      {
        url: '/og-image.jpg', // 1200x630 - Layout plan or villa 3D render
        width: 1200,
        height: 630,
        alt: 'Green Acres Delta Real Estate Project',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Acres Delta - Premium Plots & Villas',
    description: 'DTCP approved plots in Mayiladuthurai. Gated community project.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent', // Real Estate-க்கு இது correct
    name: 'Green Acres Delta',
    image: 'https://greenacresdelta.com/og-image.jpg',
    description: 'DTCP approved residential plots and villas in Mayiladuthurai, Tamil Nadu',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mayiladuthurai', // Area மட்டும் போதும்
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN'
    },
    telephone: '+91-XXXXXXXXXX',
    url: 'https://greenacresdelta.com',
    areaServed: {
      '@type': 'City',
      name: 'Mayiladuthurai'
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
