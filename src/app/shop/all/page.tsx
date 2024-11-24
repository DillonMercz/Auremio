'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'

const allProducts = [
  {
    title: "Cohiba Behike BHK 52",
    description: "Limited Edition Cuban Cigar",
    price: "1,250",
    image: "/images/product-cohiba-behike.jpg",
    category: "cigars",
    isNew: true
  },
  {
    title: "Davidoff Year of the Dragon",
    description: "2024 Limited Edition",
    price: "950",
    image: "/images/product-davidoff-dragon.jpg",
    category: "cigars",
    isNew: true
  },
  {
    title: "Montecristo No. 2",
    description: "Classic Cuban Torpedo",
    price: "850",
    image: "/images/product-montecristo-no-2.jpg",
    category: "cigars"
  },
  {
    title: "Padron 1926 Series",
    description: "Anniversary Edition",
    price: "750",
    image: "/images/product-padron-1926.jpg",
    category: "cigars"
  },
  {
    title: "S.T. Dupont Lighter",
    description: "Gold-Plated Luxury Lighter",
    price: "895",
    image: "/images/product-st-dupont-lighter.jpg",
    category: "accessories"
  },
  {
    title: "Cartier Cigar Cutter",
    description: "Limited Edition Gold Finish",
    price: "650",
    image: "/images/product-cartier-cutter.jpg",
    category: "accessories"
  },
  {
    title: "Dunhill Ashtray",
    description: "Crystal & Gold Detail",
    price: "450",
    image: "/images/product-dunhill-ashtray.jpg",
    category: "accessories"
  },
  {
    title: "Davidoff Travel Case",
    description: "Genuine Leather",
    price: "380",
    image: "/images/product-davidoff-case.jpg",
    category: "accessories"
  },
  {
    title: "Elie Bleu Humidor",
    description: "Marquetry Collection",
    price: "3,500",
    image: "/images/product-elie-bleu-humidor.jpg",
    category: "humidors"
  },
  {
    title: "Davidoff Cabinet",
    description: "Limited Edition Macassar",
    price: "4,200",
    image: "/images/product-davidoff-cabinet.jpg",
    category: "humidors"
  },
  {
    title: "Dunhill Travel Humidor",
    description: "Carbon Fiber Edition",
    price: "1,800",
    image: "/images/product-dunhill-travel.jpg",
    category: "humidors"
  },
  {
    title: "Daniel Marshall Chest",
    description: "30th Anniversary Edition",
    price: "2,900",
    image: "/images/product-daniel-marshall.jpg",
    category: "humidors"
  }
]

export default function AllProducts() {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        title="All Products"
        subtitle="Browse our complete collection of premium cigars, accessories, and humidors."
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
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Our Collection</h2>
            <div className="w-20 h-1 bg-gold-light mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.map((product) => (
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
