'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse our complete collection of premium products.',
    image: '/images/shop-hero.jpg',
    link: '/shop/all'
  },
  {
    id: 'cigars',
    name: 'Premium Cigars',
    description: 'Discover world-renowned cigars from prestigious houses.',
    image: '/images/category-cigars.jpg',
    link: '/shop/cigars'
  },
  {
    id: 'accessories',
    name: 'Luxury Accessories',
    description: 'Elevate your experience with premium accessories.',
    image: '/images/category-accessories.jpg',
    link: '/shop/accessories'
  },
  {
    id: 'humidors',
    name: 'Exclusive Humidors',
    description: 'Preserve your collection in masterfully crafted humidors.',
    image: '/images/category-humidors.jpg',
    link: '/shop/humidors'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
}

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
}

export default function Shop() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="Luxury Collection"
        subtitle="Explore our curated selection of premium cigars and accessories."
        backgroundImage="/images/shop-hero.jpg"
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
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Shop by Category</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Link href={category.link} key={category.id}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="group cursor-pointer bg-gray-50 rounded-sm overflow-hidden"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <motion.div
                      className="relative h-full w-full"
                      variants={imageVariants}
                    >
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-2xl md:text-3xl font-serif mb-2">{category.name}</h3>
                        <p className="text-sm md:text-base max-w-xs mx-auto">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
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
            <h2 className="text-3xl md:text-4xl font-serif mb-4">The Auremio Experience</h2>
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
              <p className="text-gray-600">Every product comes with a certificate of authenticity.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Luxury Gift Wrapping</h3>
              <p className="text-gray-600">Complimentary elegant packaging for all orders.</p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2">Expert Support</h3>
              <p className="text-gray-600">Personalized assistance from our specialists.</p>
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
