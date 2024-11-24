'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

const humidorProducts = [
  {
    title: "Elie Bleu Humidor",
    description: "Marquetry Collection",
    price: "3,500",
    image: "/images/product-elie-bleu-humidor.jpg",
    isNew: false
  },
  {
    title: "Davidoff Cabinet",
    description: "Limited Edition Macassar",
    price: "4,200",
    image: "/images/product-davidoff-cabinet.jpg",
    isNew: false
  },
  {
    title: "Dunhill Travel Humidor",
    description: "Carbon Fiber Edition",
    price: "1,800",
    image: "/images/product-dunhill-travel.jpg",
    isNew: false
  },
  {
    title: "Daniel Marshall Chest",
    description: "30th Anniversary Edition",
    price: "2,900",
    image: "/images/product-daniel-marshall.jpg",
    isNew: false
  }
]

export default function HumidorProducts() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Exclusive Humidors"
        subtitle="Preserve your collection in our masterfully crafted humidors."
        backgroundImage="/images/category-humidors.jpg"
        height="medium"
        align="center"
        overlay={true}
      />

      <div className="py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Luxury Humidors</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto"></div>
            <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto">
              Each humidor is a masterpiece of craftsmanship, designed to protect and showcase 
              your premium cigar collection while adding sophistication to any space.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {humidorProducts.map((product) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Superior Craftsmanship</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Perfect Humidity Control</h3>
              <p className="text-gray-600">Advanced systems maintain optimal conditions.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Premium Materials</h3>
              <p className="text-gray-600">Finest woods and precision hardware.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Lifetime Warranty</h3>
              <p className="text-gray-600">Guaranteed quality and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Guide Section */}
      <section className="bg-white py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Humidor Care Guide</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experts have compiled essential tips to help you maintain your humidor 
              in perfect condition for years to come.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Initial Setup</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Season your humidor before first use
                </li>
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Calibrate the hygrometer
                </li>
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Use distilled water only
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <h3 className="text-xl font-serif mb-3">Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Check humidity levels weekly
                </li>
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Clean with soft, dry cloth
                </li>
                <li className="flex items-start">
                  <span className="text-gold-dark mr-2">•</span>
                  Rotate cigars monthly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-20">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to receive notifications about new arrivals, limited editions, and exclusive offers.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light rounded-sm"
              />
              <button className="luxury-button whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
