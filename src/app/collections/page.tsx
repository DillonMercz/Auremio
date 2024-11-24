'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Image from 'next/image'

const collections = [
  {
    id: 'limited-editions',
    title: 'Limited Editions',
    description: 'Rare and exclusive cigars crafted for the distinguished collector',
    image: '/images/collection-limited.jpg',
    items: [
      {
        name: 'Cohiba 55 Aniversario',
        price: '5,000',
        description: 'Commemorative humidor with 55 specially selected cigars'
      },
      {
        name: 'Davidoff Year of the Dragon',
        price: '2,800',
        description: 'Complete collection in luxury presentation box'
      }
    ]
  },
  {
    id: 'vintage',
    title: 'Vintage Selection',
    description: 'Perfectly aged cigars from prestigious vintages',
    image: '/images/collection-vintage.jpg',
    items: [
      {
        name: '1992 Cuban Collection',
        price: '3,500',
        description: 'Rare pre-embargo cigars in original packaging'
      },
      {
        name: '1998 Dominican Reserve',
        price: '2,200',
        description: 'Aged Dominican puros in cedar cabinet'
      }
    ]
  },
  {
    id: 'gift-sets',
    title: 'Luxury Gift Sets',
    description: 'Curated combinations of our finest cigars and accessories',
    image: '/images/collection-gifts.jpg',
    items: [
      {
        name: 'The Connoisseur Set',
        price: '4,500',
        description: 'Premium humidor, lighter, cutter, and selection of cigars'
      },
      {
        name: 'The Presidential Collection',
        price: '6,800',
        description: 'Bespoke humidor with complete accessory suite'
      }
    ]
  }
]

export default function Collections() {
  return (
    <div>
      <Hero
        title="Exclusive Collections"
        subtitle="Discover our most prestigious offerings and limited editions."
        backgroundImage="/images/collections-hero.jpg"
        height="medium"
        align="center"
      />

      <div className="py-20">
        {collections.map((collection, index) => (
          <motion.section
            key={collection.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-32 last:mb-0"
          >
            <div className="luxury-container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">{collection.title}</h2>
                  <p className="text-gray-600 mb-8">{collection.description}</p>

                  <div className="space-y-8">
                    {collection.items.map((item) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border-l-2 border-gold-light pl-6"
                      >
                        <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-lg font-serif">${item.price}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="luxury-button mt-8"
                  >
                    Explore Collection
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* VIP Experience */}
      <section className="bg-gray-900 text-white py-20">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">The Auremio VIP Experience</h2>
            <p className="text-gray-300 mb-8">
              Join our exclusive membership program for access to rare releases, private events, and personalized concierge service.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="luxury-button"
            >
              Request Membership
            </motion.button>
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="py-20 bg-gray-50">
        <div className="luxury-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Upcoming Releases</h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about our upcoming limited editions and exclusive releases.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
            />
            <button className="luxury-button whitespace-nowrap">
              Get Notified
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
