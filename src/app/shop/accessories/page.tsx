'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

const accessoryProducts = [
  {
    title: "S.T. Dupont Lighter",
    description: "Gold-Plated Luxury Lighter",
    price: "895",
    image: "/images/product-st-dupont-lighter.jpg",
    isNew: false
  },
  {
    title: "Cartier Cigar Cutter",
    description: "Limited Edition Gold Finish",
    price: "650",
    image: "/images/product-cartier-cutter.jpg",
    isNew: false
  },
  {
    title: "Dunhill Ashtray",
    description: "Crystal & Gold Detail",
    price: "450",
    image: "/images/product-dunhill-ashtray.jpg",
    isNew: false
  },
  {
    title: "Davidoff Travel Case",
    description: "Genuine Leather",
    price: "380",
    image: "/images/product-davidoff-case.jpg",
    isNew: false
  }
]

export default function AccessoryProducts() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Luxury Accessories"
        subtitle="Elevate your cigar experience with our premium accessories collection."
        backgroundImage="/images/category-accessories.jpg"
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
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Premium Accessories</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto"></div>
            <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto">
              Complete your cigar ritual with our selection of meticulously crafted accessories 
              from the world's most prestigious luxury houses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessoryProducts.map((product) => (
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
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Why Choose Our Accessories</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Craftsmanship</h3>
              <p className="text-gray-600">Handcrafted by master artisans using premium materials.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Exclusive Designs</h3>
              <p className="text-gray-600">Limited editions and unique pieces.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Packaging</h3>
              <p className="text-gray-600">Presented in elegant gift boxes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-20">
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
