'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

const cigarProducts = [
  {
    title: "Cohiba Behike BHK 52",
    description: "Limited Edition Cuban Cigar",
    price: "1,250",
    image: "/images/product-cohiba-behike.jpg",
    isNew: true
  },
  {
    title: "Davidoff Year of the Dragon",
    description: "2024 Limited Edition",
    price: "950",
    image: "/images/product-davidoff-dragon.jpg",
    isNew: true
  },
  {
    title: "Montecristo No. 2",
    description: "Classic Cuban Torpedo",
    price: "850",
    image: "/images/product-montecristo-no-2.jpg"
  },
  {
    title: "Padron 1926 Series",
    description: "Anniversary Edition",
    price: "750",
    image: "/images/product-padron-1926.jpg"
  }
]

export default function CigarProducts() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Premium Cigars"
        subtitle="Discover our collection of world-renowned cigars from prestigious houses."
        backgroundImage="/images/category-cigars.jpg"
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
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Luxury Cigars</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto"></div>
            <p className="text-gray-600 text-center mt-6 max-w-2xl mx-auto">
              Each cigar in our collection represents the pinnacle of craftsmanship, 
              carefully selected from the world's most prestigious manufacturers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cigarProducts.map((product) => (
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

      {/* Featured Collection */}
      <section className="bg-gray-50 py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Cigar Expertise</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Authenticity Guaranteed</h3>
              <p className="text-gray-600">Every cigar comes with a certificate of authenticity.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Perfect Storage</h3>
              <p className="text-gray-600">Maintained in optimal humidity conditions.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Global Sourcing</h3>
              <p className="text-gray-600">Direct relationships with prestigious manufacturers.</p>
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
