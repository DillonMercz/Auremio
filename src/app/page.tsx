'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import ParallaxSection, { FadeInSection } from '@/components/ParallaxSection'

const categories = [
  {
    title: "Premium Cigars",
    description: "Hand-rolled excellence from the world's finest tobacco regions",
    image: "/images/category-cigars.jpg"
  },
  {
    title: "Luxury Accessories",
    description: "Essential tools for the distinguished cigar enthusiast",
    image: "/images/category-accessories.jpg"
  },
  {
    title: "Exclusive Humidors",
    description: "Preserve your collection in elegant crafted storage",
    image: "/images/category-humidors.jpg"
  }
]

const features = [
  {
    title: "Expert Curation",
    description: "Each product is hand-selected by our team of cigar connoisseurs"
  },
  {
    title: "Premium Quality",
    description: "We source only the finest materials and craftsmanship"
  },
  {
    title: "Authenticity Guaranteed",
    description: "Every product comes with a certificate of authenticity"
  },
  {
    title: "White Glove Service",
    description: "Personalized assistance and expert recommendations"
  }
]

const products = [
  {
    title: "Cohiba Behike BHK 52",
    description: "Limited Edition Cuban Cigar",
    price: "1,250",
    image: "/images/product-cohiba-behike.jpg",
    isNew: true
  },
  {
    title: "S.T. Dupont Lighter",
    description: "Gold-Plated Luxury Lighter",
    price: "895",
    image: "/images/product-st-dupont-lighter.jpg"
  },
  {
    title: "Elie Bleu Humidor",
    description: "Marquetry Collection",
    price: "3,500",
    image: "/images/product-elie-bleu-humidor.jpg"
  },
  {
    title: "Davidoff Year of the Dragon",
    description: "2024 Limited Edition",
    price: "950",
    image: "/images/product-davidoff-dragon.jpg",
    isNew: true
  }
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
      style={{ position: 'relative' }}
    >
      {/* Hero Section */}
      <ParallaxSection>
        <Hero
          title="The Art of Fine Living"
          subtitle="Discover our curated collection of the world's finest cigars and accessories."
          backgroundImage="/images/home-hero.jpg"
          ctaText="Explore Collection"
          ctaLink="/collections"
          height="large"
          align="left"
        />
      </ParallaxSection>

      {/* Featured Categories */}
      <section className="py-20 relative" style={{ position: 'relative' }}>
        <div className="luxury-container relative" style={{ position: 'relative' }}>
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Premium Selection</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <FadeInSection key={category.title} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer relative h-[400px] overflow-hidden rounded-sm"
                  style={{ position: 'relative' }}
                >
                  <div className="absolute inset-0 bg-black/40 z-10" />
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-serif text-white mb-2">{category.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{category.description}</p>
                      <button className="luxury-button">Shop Now</button>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experience Section */}
      <section className="py-20 bg-gray-50 relative" style={{ position: 'relative' }}>
        <div className="luxury-container relative" style={{ position: 'relative' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
                style={{ position: 'relative' }}
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">The Auremio Experience</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  At Auremio, we believe in the art of fine living. Each product in our collection is carefully selected to ensure the highest quality and authenticity, providing our distinguished clientele with an unparalleled luxury experience.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                      style={{ position: 'relative' }}
                    >
                      <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
            <FadeInSection>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[600px] rounded-sm overflow-hidden"
                style={{ position: 'relative' }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: "url('/images/luxury-lounge.jpg')" }}
                />
              </motion.div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="py-20 relative" style={{ position: 'relative' }}>
        <div className="luxury-container relative" style={{ position: 'relative' }}>
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Latest Arrivals</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <FadeInSection key={product.title} delay={index * 0.1}>
                <ProductCard {...product} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
