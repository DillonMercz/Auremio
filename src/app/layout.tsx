import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import ClientProviders from '@/components/ClientProviders'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Auremio | Luxury Cigars & Accessories',
  description: 'Discover the finest collection of premium cigars and luxury accessories at Auremio.',
  keywords: 'luxury cigars, premium cigars, cigar accessories, humidors, luxury gifts',
  openGraph: {
    title: 'Auremio | Luxury Cigars & Accessories',
    description: 'Discover the finest collection of premium cigars and luxury accessories at Auremio.',
    url: 'https://auremio.com',
    siteName: 'Auremio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Auremio - Luxury Cigars & Accessories',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white selection:bg-gold-light selection:text-white">
        <ClientProviders>
          <div className="flex flex-col min-h-screen">
            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="flex-grow relative mt-[104px]">
              {children}
            </main>

            {/* Newsletter Section */}
            <section className="bg-gray-50 py-20">
              <div className="luxury-container text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Join the Auremio Club</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Subscribe to receive exclusive offers, early access to limited editions, and expert insights from our master tobacconists.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light transition-all duration-300"
                  />
                  <button className="luxury-button whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </section>

            {/* Footer */}
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
}
